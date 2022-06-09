<?php
namespace App;

use App\Libs\ViteAssets;

/**
 * Scripts and Styles Class
 */
class Assets {

	function __construct() {
		// TODO: register scripts on required pages only

		if ( $this->isDevMode() ) {
			return $this->registerDevScripts();
		}

		$assets = new ViteAssets(
			BASEPLUGIN_PATH . '/assets/build/manifest.json',
			BASEPLUGIN_ASSETS . '/build/'
		);

		if ( is_admin() ) {
			$assets->addAction('src/admin.js', true);
		} else {
			$assets->addAction('src/frontend.js');
		}
	}

	function isDevMode() {
		if ( getenv( 'APP_ENV' ) === 'production' ) {
			return false;
		}

		if ( getenv( 'VITE_URL' ) === false ) {
			return false;
		}

		$resp = wp_remote_get( getenv( 'VITE_URL' ), ['timeout' => 1] );

		return ! is_wp_error( $resp );
	}

	function registerDevScripts() {
		add_action( 'admin_bar_menu', function( \WP_Admin_Bar $admin_bar ) {
				$admin_bar->add_menu( [
				'id'    => 'vite-active',
				'title' => 'Vite Active',
				'href'  => '#',
			] );
		}, 100 );

		add_action( is_admin() ? 'admin_head' : 'wp_head', function() {
			echo '<style>#wpadminbar #wp-admin-bar-vite-active { background-color: #A563FE }</style>';

			echo '<script type="module" src="http://localhost:3000/@vite/client"></script>';
			echo '<script type="module" src="http://localhost:3000/src/' . (is_admin() ? 'admin' : 'frontend') . '.js"></script>';
		} );
	}
}
