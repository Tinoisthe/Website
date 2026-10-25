<?php
declare(strict_types=1);

$pageTitle = 'NeonNextGeneration — Contact';
$pageDescription = 'Get in touch with Neon Next Generation. Contact our support team for hosting inquiries, technical assistance, or partnership opportunities.';
$pageKeywords = 'contact Neon Next Generation, hosting support, customer service, technical support, hosting inquiry';
$pageAuthor = 'Neon Next Generation PTY LTD';
$pageImage = 'https://neonnextgeneration.com/assets/logo.png';
$pageCanonicalUrl = 'https://neonnextgeneration.com/contact.php';
?>
<?php include __DIR__ . '/includes/header.php'; ?>

<?php
// Standalone contact page: always visible, never dismissible —
// dismissing the homepage teaser must not remove this page's content.
$contactDismissible = false;
include __DIR__ . '/includes/contact.php';
?>

<?php include __DIR__ . '/includes/footer.php'; ?>