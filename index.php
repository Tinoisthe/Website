<?php

declare(strict_types=1);



/**

 * ─────────────────────────────────────────────

 * Index Page — Neon Next Generation PTY LTD

 * ─────────────────────────────────────────────

 * Homepage / Landing Page

 Usage (set variables before including):

 *

 *   $bannerText     = 'Your announcement text';

 *   $bannerLink     = 'https://example.com';     // optional

 *   $bannerLinkText = 'Learn More';               // optional

 *   $bannerType     = 'info';                     // optional: info | success | warning | urgent | promo

 *   $bannerIcon     = true;                       // optional: show/hide left icon

 *   $bannerId       = 'banner-vpn';               // optional: unique ID for dismiss persistence

 *   $bannerDismiss  = true;                       // optional: show/hide close button

 *   $bannerNewTab   = false;                      // optional: open link in new tab

 *   include __DIR__ . '/banner.php';

 *

 * Last Updated: April 12, 2026

 *

 * ─────────────────────────────────────────────

 */



// ─── PAGE META ──────────────────────────────

$pageTitle        = 'NeonNextGeneration — Next-Generation Hosting Infrastructure';

$pageDescription  = 'Premium Australian-based hosting infrastructure with VPC and VPS solutions. High-performance servers, transparent pricing, and reliable support for developers and businesses.';

$pageKeywords     = 'hosting, VPS, VPC, cloud hosting, Australian hosting, web hosting, server hosting, Neon Next Generation';

$pageAuthor       = 'Neon Next Generation PTY LTD';

$pageImage        = 'https://neonnextgeneration.com/assets/logo.png';

$pageCanonicalUrl = 'https://neonnextgeneration.com/';

?>



<?php include __DIR__ . '/includes/header.php'; ?>



<?php include __DIR__ . '/includes/hero-responsive.php'; ?>

<?php include __DIR__ . '/includes/pricing-section.php'; ?>

<?php include __DIR__ . '/includes/partners.php'; ?>

<?php include __DIR__ . '/includes/community.php'; ?>

<?php include __DIR__ . '/includes/contact.php'; ?>

<?php include __DIR__ . '/includes/footer.php'; ?>
