<?php
declare(strict_types=1);

// Pricing page data (plans/tabs/currency config)
include __DIR__ . '/includes/pricing-constant.php';

$pageTitle = 'NeonNextGeneration — Pricing';
$pageDescription = 'Transparent, simple pricing for VPC and VPS hosting solutions. No hidden fees or lock-in contracts. Scale anytime with Australian-based infrastructure starting from affordable rates.';
$pageKeywords = 'hosting pricing, VPS pricing, VPC pricing, cloud hosting cost, Australian hosting prices, affordable hosting';
$pageAuthor = 'Neon Next Generation PTY LTD';
$pageImage = 'https://neonnextgeneration.com/assets/logo.png';
$pageCanonicalUrl = 'https://neonnextgeneration.com/pricing.php';
?>
<?php include __DIR__ . '/includes/header.php'; ?>

<section class="pricing-hero" data-od-id="pricing-hero">
  <div class="pricing-hero-bg"></div>
  <div class="pricing-hero-content">
    <h1>Simple, Transparent Pricing</h1>
    <p>No hidden fees. No lock-in contracts. Scale up or down anytime with Australian-based infrastructure.</p>

    <span id="currencyBadge" class="currency-badge pricing-currency-badge pricing-currency-skeleton" style="display:inline-flex; align-items:center; gap:10px; margin-left:12px; padding:6px 10px; border:1px solid rgba(255,255,255,.18); border-radius:9999px; font-size:14px; color:#fff; background:rgba(0,0,0,.2);">
      <span class="currency-skeleton-dot" aria-hidden="true"></span>
      <span class="currency-skeleton-line" aria-hidden="true"></span>
      <span class="currency-skeleton-text" style="position:absolute; left:-9999px; width:1px; height:1px; overflow:hidden;">
        Loading currency...
      </span>
    </span>
    <!-- Pricing type toggle (VPC / VPS) -->
    <div class="billing-toggle">
      <?php
      $tabIds = array_column($pricingTabs ?? [], 'id');
      $firstTab = $tabIds[0] ?? 'monthly';
      $secondTab = $tabIds[1] ?? 'vps';
      ?>
      <span class="active" id="firstTabLabel"><?php echo htmlspecialchars($pricingTabs[0]['label'] ?? 'VPC'); ?></span>
      <div class="toggle-switch" id="billingToggle" onclick="toggleBilling()">
        <div class="toggle-knob"></div>
      </div>
      <span id="secondTabLabel"><?php echo htmlspecialchars($pricingTabs[1]['label'] ?? 'VPS'); ?></span>
    </div>
  </div>
</section>

<section class="plans" data-od-id="plans">
  <div class="plans-grid">
    <?php
    // Render first tab plans by default (VPC/monthly)
    $firstTabId = $tabIds[0] ?? 'monthly';
    $firstTabPlans = $pricingPlans[$firstTabId] ?? [];
    foreach ($firstTabPlans as $plan):
      $isFeatured = !empty($plan['featured']);
    ?>
      <div class="plan-card<?php echo $isFeatured ? ' recommended' : ''; ?>">
        <?php if (!empty($plan['stock'])): ?>
          <div class="plan-stock<?php echo $plan['stock'] === 'Available' ? '' : ' out'; ?>"><?php echo htmlspecialchars($plan['stock']); ?></div>
        <?php endif; ?>
        <?php if (!empty($plan['badge'])): ?>
          <div class="plan-badge"><?php echo htmlspecialchars($plan['badge']); ?></div>
        <?php endif; ?>
        
        <div class="plan-name"><?php echo htmlspecialchars($plan['name']); ?></div>
        <div class="plan-positioning"><?php echo htmlspecialchars($plan['description']); ?></div>

        <div class="plan-price">
          <?php if (!empty($plan['pricePrefix'])): ?><span class="plan-price-prefix"><?php echo htmlspecialchars($plan['pricePrefix']); ?></span><?php endif; ?>
          <span class="plan-currency plan-currency-skeleton">AU$</span>
          <span class="plan-amount plan-amount-skeleton" data-price="<?php echo htmlspecialchars((string)$plan['price']); ?>" data-monthly="<?php echo htmlspecialchars((string)$plan['price']); ?>" data-annual="<?php echo htmlspecialchars((string)$plan['price']); ?>"><?php echo htmlspecialchars(number_format((float)$plan['price'], 2, '.', '')); ?></span>
          <span class="plan-period">/<?php echo htmlspecialchars($plan['period']); ?></span>
        </div>

        <a href="<?php echo htmlspecialchars($plan['buttonUrl']); ?>" class="plan-cta<?php echo $isFeatured ? ' primary' : ' ghost'; ?>">
          <?php echo htmlspecialchars($plan['buttonText']); ?>
        </a>

        <ul class="plan-features">
          <?php foreach (($plan['features'] ?? []) as $feature): ?>
            <li class="<?php echo htmlspecialchars($feature['color'] ?? ''); ?>">
              <i data-lucide="<?php echo htmlspecialchars($feature['icon'] ?? 'check'); ?>" class="inline-block w-4 h-4 mr-2 -mt-0.5"></i>
              <?php echo htmlspecialchars($feature['text']); ?>
            </li>
          <?php endforeach; ?>
        </ul>
      </div>
    <?php endforeach; ?>
  </div>
  
  <!-- Hidden plan data for all tabs -->
  <?php foreach (($pricingPlans ?? []) as $tabId => $plans): ?>
    <template data-tab-plans="<?php echo htmlspecialchars($tabId); ?>">
      <?php foreach ($plans as $plan): ?>
        <div class="plan-card<?php echo !empty($plan['featured']) ? ' recommended' : ''; ?>">
          <?php if (!empty($plan['stock'])): ?>
            <div class="plan-stock<?php echo $plan['stock'] === 'Available' ? '' : ' out'; ?>"><?php echo htmlspecialchars($plan['stock']); ?></div>
          <?php endif; ?>
          <?php if (!empty($plan['badge'])): ?>
            <div class="plan-badge"><?php echo htmlspecialchars($plan['badge']); ?></div>
          <?php endif; ?>
          
          <div class="plan-name"><?php echo htmlspecialchars($plan['name']); ?></div>
          <div class="plan-positioning"><?php echo htmlspecialchars($plan['description']); ?></div>

          <div class="plan-price">
            <?php if (!empty($plan['pricePrefix'])): ?><span class="plan-price-prefix"><?php echo htmlspecialchars($plan['pricePrefix']); ?></span><?php endif; ?>
            <span class="plan-currency plan-currency-skeleton">AU$</span>
            <span class="plan-amount plan-amount-skeleton" data-price="<?php echo htmlspecialchars((string)$plan['price']); ?>" data-monthly="<?php echo htmlspecialchars((string)$plan['price']); ?>" data-annual="<?php echo htmlspecialchars((string)$plan['price']); ?>"><?php echo htmlspecialchars(number_format((float)$plan['price'], 2, '.', '')); ?></span>
            <span class="plan-period">/<?php echo htmlspecialchars($plan['period']); ?></span>
          </div>

          <a href="<?php echo htmlspecialchars($plan['buttonUrl']); ?>" class="plan-cta<?php echo !empty($plan['featured']) ? ' primary' : ' ghost'; ?>">
            <?php echo htmlspecialchars($plan['buttonText']); ?>
          </a>

          <ul class="plan-features">
            <?php foreach (($plan['features'] ?? []) as $feature): ?>
              <li class="<?php echo htmlspecialchars($feature['color'] ?? ''); ?>">
                <i data-lucide="<?php echo htmlspecialchars($feature['icon'] ?? 'check'); ?>" class="inline-block w-4 h-4 mr-2 -mt-0.5"></i>
                <?php echo htmlspecialchars($feature['text']); ?>
              </li>
            <?php endforeach; ?>
          </ul>
        </div>
      <?php endforeach; ?>
    </template>
  <?php endforeach; ?>
</section>

<script src="assets/currency.js?v=<?php echo time(); ?>"></script>
<script>
  window.__pricingTabs = <?php echo json_encode($pricingTabs); ?>;
  window.__pricingPlans = <?php echo json_encode($pricingPlans); ?>;
  window.__firstTabId = '<?php echo htmlspecialchars($firstTabId); ?>';
</script>

<?php include __DIR__ . '/includes/faq-constant.php'; ?>

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


<script src="assets/pricing.js?v=<?php echo time(); ?>"></script>

<?php include __DIR__ . '/includes/footer.php'; ?>