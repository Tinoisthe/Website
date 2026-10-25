<?php
/**
 * BytArch Studio | About Us Page
 * Our story, mission, and the people behind the studio
 */

require_once __DIR__ . '/includes/config.php';

// SEO Meta Tags
$seo_title = 'About Us | BytArch Studio | Web Hosting & Development Belize';
$seo_description = 'Learn about BytArch Studio, an affordable web hosting and development solution built for Belizeans. Based in Dangriga, serving all of Belize with WhatsApp support.';
$seo_keywords = 'about BytArch Studio, Belize web developer, Dangriga hosting company, affordable web development Belize, about us, local web hosting';
$seo_canonical = 'https://studio.bytarch.com/about-us.php';
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
                <p class="micro-label text-accent mb-4 reveal">About Us</p>
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 reveal" style="transition-delay: 100ms;">
                    We build websites<br>
                    <span class="text-accent">that work.</span>
                </h1>
                <p class="text-lg text-muted max-w-xl leading-relaxed reveal" style="transition-delay: 200ms;">
                    BytArch Studio was created as an affordable solution for web hosting and development in Belize. We believe every Belizean business deserves a fast, reliable website without breaking the bank.
                </p>
            </div>
            <div class="col-span-12 lg:col-span-4 reveal" style="transition-delay: 300ms;">
                <div class="bg-card border border-border rounded-2xl p-6 space-y-4">
                    <div class="flex items-center gap-3">
                        <div class="w-2 h-2 rounded-full bg-accent"></div>
                        <span class="text-sm text-muted">Belize Based</span>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="w-2 h-2 rounded-full bg-accent"></div>
                        <span class="text-sm text-muted">WhatsApp Support</span>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="w-2 h-2 rounded-full bg-accent"></div>
                        <span class="text-sm text-muted">Full-Service Studio</span>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="w-2 h-2 rounded-full bg-accent"></div>
                        <span class="text-sm text-muted">99.9% Uptime</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Story Section -->
    <section class="max-w-7xl mx-auto px-6 py-20 border-t border-border/50 relative z-10">
        <div class="grid grid-cols-12 gap-x-0 gap-y-8 lg:gap-12">
            <div class="col-span-12 lg:col-span-4 reveal">
                <p class="micro-label text-accent mb-4">Our Story</p>
                <h2 class="text-2xl font-bold mb-4">Built for Belizeans, by Belizeans.</h2>
            </div>
            <div class="col-span-12 lg:col-span-8 space-y-6 text-muted leading-relaxed reveal" style="transition-delay: 100ms;">
                <p>
                    BytArch Studio was created with one goal: make web hosting and development affordable for Belizeans. Too many options were overpriced, unreliable, or based overseas. We built a solution that works for our people, right here at home.
                </p>
                <p>
                    We set out to build a studio that does things differently. Hosting that actually works. Websites that load fast. Support that responds instantly. And pricing that makes sense for Belizean businesses.
                </p>
                <p>
                    Today, we host websites for businesses across Belize, from Belize City to San Pedro to Dangriga. We build everything from simple landing pages to complex e-commerce stores and custom web applications.
                </p>
            </div>
        </div>
    </section>

    <!-- Mission Section -->
    <section class="max-w-7xl mx-auto px-6 py-20 border-t border-border/50 relative z-10">
        <div class="grid grid-cols-12 gap-x-0 gap-y-8 lg:gap-12">
            <div class="col-span-12 lg:col-span-4 reveal">
                <p class="micro-label text-accent mb-4">Our Mission</p>
                <h2 class="text-2xl font-bold mb-4">Make the web accessible.</h2>
            </div>
            <div class="col-span-12 lg:col-span-8 reveal" style="transition-delay: 100ms;">
                <div class="bg-card border border-border rounded-2xl p-8">
                    <p class="text-lg leading-relaxed mb-6">
                        Every business deserves a website that works. Not one that's slow, expensive, or built by someone who doesn't understand your market.
                    </p>
                    <p class="text-lg leading-relaxed">
                        We're here to change that. Fast hosting. Beautiful websites. Instant support. All at prices that make sense for Belize.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Values Section -->
    <section class="max-w-7xl mx-auto px-6 py-20 border-t border-border/50 relative z-10">
        <div class="grid grid-cols-12 gap-x-0 gap-y-8 lg:gap-12 mb-16">
            <div class="col-span-12 lg:col-span-4 reveal">
                <p class="micro-label text-accent mb-4">What We Believe</p>
                <h2 class="text-2xl font-bold mb-4">Our core values.</h2>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-card border border-border rounded-2xl p-6 reveal">
                <div class="text-4xl font-bold text-accent/20 mb-3 mono">01</div>
                <h3 class="text-lg font-bold mb-3">Simplicity.</h3>
                <p class="text-sm text-muted leading-relaxed">
                    No complicated dashboards. No jargon. Just straightforward hosting and websites that work. Order via WhatsApp and you're live.
                </p>
            </div>

            <div class="bg-card border border-border rounded-2xl p-6 reveal" style="transition-delay: 100ms;">
                <div class="text-4xl font-bold text-accent/20 mb-3 mono">02</div>
                <h3 class="text-lg font-bold mb-3">Transparency.</h3>
                <p class="text-sm text-muted leading-relaxed">
                    What you see is what you pay. No hidden fees. No surprise charges. All prices in BZD with 12.5% GST clearly shown.
                </p>
            </div>

            <div class="bg-card border border-border rounded-2xl p-6 reveal" style="transition-delay: 200ms;">
                <div class="text-4xl font-bold text-accent/20 mb-3 mono">03</div>
                <h3 class="text-lg font-bold mb-3">Reliability.</h3>
                <p class="text-sm text-muted leading-relaxed">
                    99.9% uptime. Daily backups. Free SSL. Your website stays online so your business never misses a customer.
                </p>
            </div>

            <div class="bg-card border border-border rounded-2xl p-6 reveal">
                <div class="text-4xl font-bold text-accent/20 mb-3 mono">04</div>
                <h3 class="text-lg font-bold mb-3">Speed.</h3>
                <p class="text-sm text-muted leading-relaxed">
                    Fast hosting. Fast websites. Fast support. We respect your time and build everything to load quickly.
                </p>
            </div>

            <div class="bg-card border border-border rounded-2xl p-6 reveal" style="transition-delay: 100ms;">
                <div class="text-4xl font-bold text-accent/20 mb-3 mono">05</div>
                <h3 class="text-lg font-bold mb-3">Local First.</h3>
                <p class="text-sm text-muted leading-relaxed">
                    We're based in Belize and built this for our community. Our services are made for Belizean businesses, affordable, reliable, and close to home.
                </p>
            </div>

            <div class="bg-card border border-border rounded-2xl p-6 reveal" style="transition-delay: 200ms;">
                <div class="text-4xl font-bold text-accent/20 mb-3 mono">06</div>
                <h3 class="text-lg font-bold mb-3">Human Support.</h3>
                <p class="text-sm text-muted leading-relaxed">
                    No bots. No ticketing systems. Message us on WhatsApp and get instant help from a real person who cares about your business.
                </p>
            </div>
        </div>
    </section>

    <!-- Numbers Section -->
    <section class="max-w-7xl mx-auto px-6 py-20 border-t border-border/50 relative z-10">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="text-center reveal">
                <div class="text-4xl md:text-5xl font-bold text-accent mb-2">99.9%</div>
                <p class="text-sm text-muted">Uptime Guarantee</p>
            </div>
            <div class="text-center reveal" style="transition-delay: 100ms;">
                <div class="text-4xl md:text-5xl font-bold text-accent mb-2">$3</div>
                <p class="text-sm text-muted">Starting Hosting</p>
            </div>
            <div class="text-center reveal" style="transition-delay: 200ms;">
                <div class="text-4xl md:text-5xl font-bold text-accent mb-2">24/7</div>
                <p class="text-sm text-muted">WhatsApp Support</p>
            </div>
            <div class="text-center reveal" style="transition-delay: 300ms;">
                <div class="text-4xl md:text-5xl font-bold text-accent mb-2">BZD</div>
                <p class="text-sm text-muted">All Prices Local</p>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="max-w-7xl mx-auto px-6 py-20 border-t border-border/50 relative z-10">
        <div class="bg-card border border-border rounded-3xl p-8 md:p-12 text-center reveal">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Work with us.</h2>
            <p class="text-muted mb-8 max-w-lg mx-auto">Ready to get your business online? Let's chat about hosting, web development, or anything in between.</p>
            <a href="<?php echo whatsapp_link('Hi, I\'d like to learn more about BytArch Studio and your services.'); ?>" target="_blank" class="inline-flex items-center gap-2 bg-[#4a9d6e] text-white px-8 py-4 rounded-full text-[15px] font-medium hover:bg-[#3d8a5e] transition-all">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chat on WhatsApp
            </a>
        </div>
    </section>

    <?php include __DIR__ . '/includes/footer.php'; ?>
    <?php include __DIR__ . '/includes/scripts.php'; ?>
</body>
</html>