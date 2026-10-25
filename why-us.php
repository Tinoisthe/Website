<?php
/**
 * BytArch Studio | Why Choose Us Page
 * Standalone page with key differentiators
 */

require_once __DIR__ . '/includes/config.php';

// SEO Meta Tags
$seo_title = 'Why Choose Us | BytArch Studio | Belize Web Hosting & Development';
$seo_description = 'Why businesses in Belize choose BytArch Studio: WhatsApp support, transparent BZD pricing, 99.9% uptime, 50/50 payment terms, and local Belizean service.';
$seo_keywords = 'why BytArch Studio, best hosting Belize, reliable web development Belize, WhatsApp support hosting, affordable websites Belize, Belize web hosting reviews';
$seo_canonical = 'https://studio.bytarch.com/why-us.php';
?>
<!DOCTYPE html>
<html lang="en">
<?php include __DIR__ . '/includes/head.php'; ?>

<body class="min-h-screen">
    <div class="noise-bg"></div>

    <?php include __DIR__ . '/includes/header.php'; ?>

    <!-- Hero -->
    <section class="max-w-7xl mx-auto px-6 pt-40 pb-20 relative z-10">
        <div class="grid grid-cols-12 gap-x-0 gap-y-6 lg:gap-6 items-center">
            <div class="col-span-12 lg:col-span-8">
                <p class="micro-label text-accent mb-4 reveal">Why Choose Us</p>
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 reveal" style="transition-delay: 100ms;">
                    Built different.<br>
                    <span class="text-accent">Built for you.</span>
                </h1>
                <p class="text-lg text-muted max-w-xl leading-relaxed reveal" style="transition-delay: 200ms;">
                    Reliable hosting and expert web development, backed by real people who care about your business.
                </p>
            </div>
            <div class="col-span-12 lg:col-span-4 reveal" style="transition-delay: 300ms;">
                <div class="bg-card border border-border rounded-2xl p-6">
                    <div class="text-4xl font-bold text-accent/20 mb-3 mono">6</div>
                    <p class="text-sm text-muted leading-relaxed">Reasons why hundreds of Belizean businesses trust BytArch Studio for their online presence.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Principles Grid -->
    <section class="max-w-7xl mx-auto px-6 py-20 border-t border-border/50 relative z-10">
        <div class="manifesto-grid grid grid-cols-12">
            <div class="col-span-12 lg:col-span-3 mb-12 lg:mb-0 reveal">
                <div class="sticky top-12">
                    <h2 class="micro-label text-accent mb-6">Our Principles</h2>
                    <p class="text-[13px] text-muted font-medium leading-relaxed max-w-[200px]">
                        The values that drive every decision we make.
                    </p>
                </div>
            </div>

            <div class="col-span-12 lg:col-span-9 space-y-20">
                <!-- Row 1 -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div class="reveal">
                        <div class="text-4xl font-bold text-accent/20 mb-3 mono">01</div>
                        <h3 class="text-xl font-bold mb-3">WhatsApp Support.</h3>
                        <p class="text-sm text-muted leading-relaxed">
                            No ticketing systems, no waiting days for a response. Message us directly on WhatsApp and get <strong class="text-[var(--text-main)]">instant human support</strong> for both hosting and web development.
                        </p>
                    </div>
                    <div class="reveal" style="transition-delay: 100ms;">
                        <div class="text-4xl font-bold text-accent/20 mb-3 mono">02</div>
                        <h3 class="text-xl font-bold mb-3">Belize Based.</h3>
                        <p class="text-sm text-muted leading-relaxed">
                            We're based in Belize and understand the local market. From Belize City to San Pedro, we provide <strong class="text-[var(--text-main)]">services that work</strong> for Belizean businesses.
                        </p>
                    </div>
                </div>

                <!-- Row 2 -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div class="reveal">
                        <div class="text-4xl font-bold text-accent/20 mb-3 mono">03</div>
                        <h3 class="text-xl font-bold mb-3">Transparent Pricing.</h3>
                        <p class="text-sm text-muted leading-relaxed">
                            What you see is what you pay. No hidden fees, no surprise charges. Hosting from <strong class="text-[var(--text-main)]">$3/month</strong> and websites from <strong class="text-[var(--text-main)]">$149 BZD</strong>. All prices in BZD with 12.5% GST included.
                        </p>
                    </div>
                    <div class="reveal" style="transition-delay: 100ms;">
                        <div class="text-4xl font-bold text-accent/20 mb-3 mono">04</div>
                        <h3 class="text-xl font-bold mb-3">50/50 Payment Terms.</h3>
                        <p class="text-sm text-muted leading-relaxed">
                            For web development, pay <strong class="text-[var(--text-main)]">50% upfront</strong> and <strong class="text-[var(--text-main)]">50% upon completion</strong>. Your 1 month free hosting is included with every website package.
                        </p>
                    </div>
                </div>

                <!-- Row 3 -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div class="reveal">
                        <div class="text-4xl font-bold text-accent/20 mb-3 mono">05</div>
                        <h3 class="text-xl font-bold mb-3">Full-Service Studio.</h3>
                        <p class="text-sm text-muted leading-relaxed">
                            We don't just host your site, we <strong class="text-[var(--text-main)]">build it too</strong>. From landing pages to e-commerce stores to custom web apps, we handle everything under one roof.
                        </p>
                    </div>
                    <div class="reveal" style="transition-delay: 100ms;">
                        <div class="text-4xl font-bold text-accent/20 mb-3 mono">06</div>
                        <h3 class="text-xl font-bold mb-3">99.9% Uptime.</h3>
                        <p class="text-sm text-muted leading-relaxed">
                            Your website stays online. Our infrastructure is built for <strong class="text-[var(--text-main)]">reliability</strong> with daily backups and free SSL certificates on every hosting plan.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="max-w-7xl mx-auto px-6 py-20 border-t border-border/50 relative z-10">
        <div class="bg-card border border-border rounded-3xl p-8 md:p-12 text-center reveal">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to get started?</h2>
            <p class="text-muted mb-8 max-w-lg mx-auto">Join hundreds of Belizean businesses that trust BytArch Studio for hosting and web development.</p>
            <a href="<?php echo whatsapp_link('Hi, I\'m interested in your services. Can you help me get started?'); ?>" target="_blank" class="inline-flex items-center gap-2 bg-[#4a9d6e] text-white px-8 py-4 rounded-full text-[15px] font-medium hover:bg-[#3d8a5e] transition-all">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chat on WhatsApp
            </a>
        </div>
    </section>

    <?php include __DIR__ . '/includes/footer.php'; ?>
    <?php include __DIR__ . '/includes/scripts.php'; ?>
</body>
</html>