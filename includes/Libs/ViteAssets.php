<?php

namespace App\Libs;

use App\Libs\ViteManifest;

class ViteAssets
{
    private $vm;
    private $defaultOptions = [
        "crossorigin" => true,
        "integrity" => true
    ];

    public function __construct(string $manifestFile, string $basePath)
    {
        $this->vm = new ViteManifest($manifestFile, $basePath);
    }

    /**
     * Writes tags for entries specified in the manifest to the page header
     *
     * @param array|string $entrypoint
     * @return void
     */
    public function addAction(string $entrypoint, bool $isAdmin = false, int $priority = 0): void
    {
        if (!function_exists('add_action')) {
            throw new \Exception("WordPress function add_action() not found");
        }

        $entries = is_array($entrypoint) ? $entrypoint : [$entrypoint];

        $hook = $isAdmin ? 'admin_head' : 'wp_head';

        add_action($hook, function () use ($entries) {
            foreach ($entries as $entry) {
                $scriptTag = $this->getScriptTag($entry);

                if ($scriptTag) {
                    echo $scriptTag . PHP_EOL;
                }
            }
        }, $this->getPriority($priority, "scripts"), 1);

        add_action($hook, function () use ($entries) {
            foreach ($entries as $entry) {
                foreach ($this->getPreloadTags($entry) as $preloadTag) {
                    echo $preloadTag . PHP_EOL;
                }
            }
        }, $this->getPriority($priority, "preloads"), 1);

        add_action($hook, function () use ($entries) {
            foreach ($entries as $entry) {
                foreach ($this->getStyleTags($entry) as $styleTag) {
                    echo $styleTag . PHP_EOL;
                }
            }
        }, $this->getPriority($priority, "styles"), 1);
    }

    /**
     * Returns the script tag for an entry in the manifest
     *
     * @param string $entrypoint
     * @param array $options
     * @return string
     */
    public function getScriptTag(string $entrypoint, array $options = []): string
    {
        $hash = $options["integrity"] ?? true;
        $url = $this->vm->getEntrypoint($entrypoint, $hash);

        if (!$url) {
            return null;
        }

        $defaultAttributes = [
            "type=\"module\"",
            "src=\"{$url['url']}\""
        ];

        return "<script {$this->getAttributes($url, $defaultAttributes, $options)}></script>";
    }

    /**
     * Returns the style tags for an entry in the manifest
     *
     * @param string $entrypoint
     * @param array $options
     * @return array
     */
    public function getStyleTags(string $entrypoint, array $options = []): array
    {
        $hash = $options["integrity"] ?? true;

        return array_map(function ($url, $options) {
            $defaultAttributes = [
                "rel=\"stylesheet\"",
                "href=\"{$url['url']}\""
            ];

            return "<link {$this->getAttributes($url, $defaultAttributes, $options)} />";
        }, $this->vm->getStyles($entrypoint, $hash), [$options]);
    }

    /**
     * Returns the preload tags for an entry in the manifest
     *
     * @param string $entry
     * @return array
     */
    public function getPreloadTags(string $entry): array
    {
        return array_map(function ($import) {
            return "<link rel=\"modulepreload\" href=\"{$import['url']}\" />";
        }, $this->vm->getImports($entry));
    }

    /**
     * Returns priority for an action
     *
     * @param array|int $priority
     * @param string $key
     * @return int
     */
    private function getPriority(int $priority, string $key)
    {
        switch (true) {
            case is_integer($priority):
                return $priority;

            case is_array($priority) && is_integer($priority[$key]):
                return $priority[$key];

            default:
                return 0;
        }
    }

    /**
    * Returns optional attribues for script or link tags
    *
    * @param string $url
    * @param array $attributes
    * @param array $options
    * @return array
    */
    private function getAttributes($url, array $attributes, array $options)
    {
        ["crossorigin" => $crossorigin, "integrity" => $integrity] = array_merge(
            $this->defaultOptions,
            $options
        );

        if ($crossorigin === true) {
            $attributes[] = "crossorigin";
        } elseif (in_array($crossorigin, ["anonymous", "use-credentials"])) {
            $attributes[] = "crossorigin=\"{$crossorigin}\"";
        }

        if ($integrity === true) {
            $attributes[] = "integrity=\"{$url['hash']}\"";
        }

        return join(" ", $attributes);
    }
}
