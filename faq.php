<?php
declare(strict_types=1);

include __DIR__ . '/includes/faq-constant.php';

$pageTitle = 'NeonNextGeneration — FAQ';
$pageDescription = 'Frequently asked questions about Neon Next Generation hosting services. Find answers about billing, hosting plans, technical specifications, and more.';
$pageKeywords = 'FAQ, frequently asked questions, hosting questions, billing help, technical support, Neon Next Generation help';
$pageAuthor = 'Neon Next Generation PTY LTD';
$pageImage = 'https://neonnextgeneration.com/assets/logo.png';
$pageCanonicalUrl = 'https://neonnextgeneration.com/faq.php';
?>
<?php include __DIR__ . '/includes/header.php'; ?>

<section class="faq" data-od-id="faq">
  <div class="faq-heading">FAQ</div>
  <h2 class="faq-title">Common Questions</h2>

  <?php foreach (($faqData ?? []) as $section): ?>
    <div class="faq-section">
      <?php if (!empty($section['title'])): ?>
        <div class="faq-section-title"><?php echo htmlspecialchars($section['title']); ?></div>
      <?php endif; ?>

      <?php if (!empty($section['badge'])): ?>
        <div class="faq-section-badge"><?php echo htmlspecialchars($section['badge']); ?></div>
      <?php endif; ?>

      <?php foreach (($section['items'] ?? []) as $item): ?>
        <?php
          $question = (string)($item['question'] ?? '');
          $answer = (string)($item['answer'] ?? '');
        ?>
        <details class="faq-item">
          <summary><?php echo htmlspecialchars($question); ?></summary>
          <div class="faq-answer"><?php echo $answer; ?></div>
        </details>
      <?php endforeach; ?>
    </div>
  <?php endforeach; ?>
</section>

<?php include __DIR__ . '/includes/footer.php'; ?>