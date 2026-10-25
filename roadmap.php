<?php
declare(strict_types=1);

$pageTitle = 'NeonNextGeneration — Roadmap';
$pageDescription = 'Explore the Neon Next Generation product roadmap. See our upcoming features, infrastructure improvements, and future plans for our hosting platform.';
$pageKeywords = 'hosting roadmap, product roadmap, feature updates, infrastructure plans, Neon Next Generation development';
$pageAuthor = 'Neon Next Generation PTY LTD';
$pageImage = 'https://neonnextgeneration.com/assets/logo.png';
$pageCanonicalUrl = 'https://neonnextgeneration.com/roadmap.php';
?>
<?php include __DIR__ . '/includes/header.php'; ?>

<?php include __DIR__ . '/includes/roadmap.php'; ?>

<script>
  if (typeof lucide !== 'undefined' && typeof lucide.createIcons === 'function') {
    lucide.createIcons({ icons: lucide });
  }
</script>

<?php include __DIR__ . '/includes/footer.php'; ?>