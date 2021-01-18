<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '81wbM3JsB6sAbz4y/0AOBma1XlmT0pXIGvX9k10kuDfovCyYkU9dygLtmDG+unkfdf1Wmmq+EwFMQ5hdpyFgxQ==');
define('SECURE_AUTH_KEY',  '5JJzqegl2vJN2H2R+41+MiLTgZWIMc7QLzqq+MNkmxXVyJCCkzMzWrcOzYpF5DLeKxzM94+UDrSjU+ZoUO0/jw==');
define('LOGGED_IN_KEY',    'GoSe5yUNYINcHWkmZHBxxVR/CGaxAUyRuXs/cWpd7fIGRs3r54yPEFh2lyoFKArmFc5RO30v5yHht11Y4V7cRA==');
define('NONCE_KEY',        'wES0cseZJ0JcI6xsjoq0oUzTf5MiR3H/2Gq2MQnHT6t/3ywwuWZ8dOWoiC6KBO3fSpFb5Jhx1/Gyax1ZkJts0g==');
define('AUTH_SALT',        'OImPVi/btRW+eb6/e8GMemP7D9V5FLtV1xJspNmX4UwJoYazKGgKKlWlJ5t0XjVLBtj1chL4zD0mifUc5RMwqQ==');
define('SECURE_AUTH_SALT', 'h06OxR0mvKJcO4YRfguQ+2lsNfN7fJlk+W278UWDK4HcT+B1FGfC6WJROOa+gkMJTCqCu0D0yq4BY4WxQD0sXw==');
define('LOGGED_IN_SALT',   'nFZOcvGDPAvQnxj0Q5LTWPxb+8qpKsGZV1XkK/lckodDczBSdDbcJKxftFUfsXltdTar+Q+pVWsd6nRS8XDCgQ==');
define('NONCE_SALT',       '35s9ZYBBgNQWyESVzGx3AfheiVXLnWmwjTWYLx5dzYPdxCAvvySo7gXcWbB/+yfhpR1Q3Y6YnoHjp1YK5buTtw==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
