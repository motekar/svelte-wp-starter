<?php

namespace App\Libs;

class ViteManifest
{
    private array $manifest;
    private string $baseUri;

    public function __construct(string $manifestFile, string $baseUri)
    {
        if (!file_exists(realpath($manifestFile))) {
            throw new \Exception("Manifest file does not exist: $manifestFile");
        }

        try {
            $this->manifest = json_decode(
                file_get_contents($manifestFile),
                true
            );
        } catch (\Throwable $errorMessage) {
            throw new \Exception("Failed loading manifest: $errorMessage");
        }

        if (!parse_url($baseUri)) {
            throw new \Exception("Failed to parse URL: $baseUri");
        }

        $this->baseUri = $baseUri;
    }

    /**
     * Returns the contents of the manifest file
     *
     * @return array
     */
    public function getManifest(): array
    {
        return $this->manifest;
    }

    /**
     * Returns the entrypoint from the manifest
     *
     * @param string $entrypoint
     * @param bool $hash
     * @return array
     */
    public function getEntrypoint(string $entrypoint, bool $hash = true): array
    {
        return isset($this->manifest[$entrypoint]) ? [
            "hash" => $hash ? $this->getFileHash($this->manifest[$entrypoint]["file"]) : null,
            "url"  => $this->getPath($this->manifest[$entrypoint]["file"])
        ] : [];
    }

    /**
     * Returns imports for a file listed in the manifest
     *
     * @param string $entrypoint
     * @param bool $hash
     * @return array
     */
    public function getImports(string $entrypoint, bool $hash = true): array
    {
        return array_filter(
            array_map(function ($import, $hash) {
                return isset($this->manifest[$import]["file"]) ? [
                    "hash" => $hash ? $this->getFileHash($this->manifest[$import]["file"]) : null,
                    "url"  => $this->getPath($this->manifest[$import]["file"])
                ] : [];
            }, $this->manifest[$entrypoint]["imports"], [$hash])
        );
    }

    /**
     * Returns stylesheets for a file listed in the manifest
     *
     * @param string $entrypoint
     * @param bool $hash
     * @return array
     */
    public function getStyles(string $entrypoint, bool $hash = true): array
    {
        return array_filter(
            array_map(function ($style, $hash) {
                return isset($style) ? [
                    "hash" => $hash ? $this->getFileHash($style) : null,
                    "url"  => $this->getPath($style)
                ] : [];
            }, $this->manifest[$entrypoint]["css"], [$hash])
        );
    }

    /**
     * Returns SHA-256 hash of file
     *
     * @param string $file
     * @return string
     */
    private function getFileHash(string $file): string
    {
        return "sha256-" . base64_encode(
            openssl_digest(
                file_get_contents(
                    $this->getPath($file)
                ),
                "sha256",
                true
            )
        );
    }

    /**
     * Resolves URL for a given file path
     *
     * @param string $relativePath
     * @return string
     */
    private function getPath(string $relativePath): string
    {
        return $this->baseUri . $relativePath;
    }
}
