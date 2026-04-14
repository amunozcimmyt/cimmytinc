const fs = require('fs');

function escapeHtml(unsafe) {
    return unsafe.trim()
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
}

function Section(title, html, description = "") {
    return `
    <div class="flex flex-col w-full mb-16" id="${title.toLowerCase().replace(/[^a-z0-9]+/g,'-')}">
        <h2 class="bg-gray-100 border-l-4 border-cimmyt-green text-gray-700 font-bold mx-auto w-full p-4 mb-2 shadow-sm text-xl uppercase tracking-wider">${title}</h2>
        ${description ? `<p class="text-gray-500 text-sm mb-6 ml-4 italic">${description}</p>` : ''}
        <div class="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm relative overflow-hidden">
            <div class="absolute top-0 right-0 px-3 py-1 bg-gray-50 text-[10px] text-gray-400 font-bold rounded-bl-lg border-b border-l border-gray-100">PREVIEW</div>
            ${html}
        </div>
        <div class="relative bg-[#0d1117] rounded-xl shadow-md overflow-hidden mt-6 border border-gray-800">
            <div class="flex items-center px-4 py-3 bg-[#161b22] border-b border-gray-800 pointer-events-none select-none">
                <div class="flex space-x-2">
                    <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div class="ml-4 text-xs font-mono text-gray-400">Code Snippet</div>
            </div>
            <pre class="font-mono text-[13px] leading-relaxed overflow-auto max-h-[600px] whitespace-pre-wrap break-words max-w-full p-6"><code class="language-html">${escapeHtml(html)}</code></pre>
        </div>
    </div>`;
}

const snippets = [];

// 1. BRAND COLORS
snippets.push(Section('Brand Colors', `
<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
    <div class="flex flex-col rounded-xl overflow-hidden shadow-sm">
        <div class="h-20 bg-cimmyt-green w-full"></div>
        <div class="p-3 bg-gray-50 text-xs font-mono text-center text-gray-600">#76bc21</div>
    </div>
    <div class="flex flex-col rounded-xl overflow-hidden shadow-sm">
        <div class="h-20 bg-cimmyt-marine w-full"></div>
        <div class="p-3 bg-gray-50 text-xs font-mono text-center text-gray-600">#346671</div>
    </div>
    <div class="flex flex-col rounded-xl overflow-hidden shadow-sm">
        <div class="h-20 bg-cimmyt-blue w-full"></div>
        <div class="p-3 bg-gray-50 text-xs font-mono text-center text-gray-600">#8ec1cb</div>
    </div>
    <div class="flex flex-col rounded-xl overflow-hidden shadow-sm">
        <div class="h-20 bg-cimmyt-orange w-full"></div>
        <div class="p-3 bg-gray-50 text-xs font-mono text-center text-gray-600">#ffbf50</div>
    </div>
    <div class="flex flex-col rounded-xl overflow-hidden shadow-sm">
        <div class="h-20 bg-cimmyt-brown w-full"></div>
        <div class="p-3 bg-gray-50 text-xs font-mono text-center text-gray-600">#704b0f</div>
    </div>
</div>
`, "Primary color palette defined in @theme."));

// 2. TYPOGRAPHY
snippets.push(Section('Typography', `
<div class="space-y-6">
    <div>
        <span class="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Circle Slab (Headings)</span>
        <h1 class="font-circle-slab text-4xl text-cimmyt-marine font-bold">This is a main heading</h1>
    </div>
    <div>
        <span class="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Avenir (Body)</span>
        <p class="font-avenir text-lg text-gray-700">This is the default body text using Avenir Next. It is clean, modern and legible.</p>
        <p class="font-avenir font-bold text-lg text-gray-700 mt-2">This is Avenir Next Bold example.</p>
    </div>
</div>
`));

// 3. LUCIDE ICONS
snippets.push(Section('Lucide Icons', `
<div class="flex gap-8 items-center bg-gray-50 p-6 rounded-xl border border-dashed border-gray-200">
    <div class="flex flex-col items-center gap-2">
        <i data-lucide="house" class="w-8 h-8 text-cimmyt-green"></i>
        <code class="text-[10px] text-gray-400">house</code>
    </div>
    <div class="flex flex-col items-center gap-2">
        <i data-lucide="trash-2" class="w-8 h-8 text-red-500"></i>
        <code class="text-[10px] text-gray-400">trash-2</code>
    </div>
    <div class="flex flex-col items-center gap-2">
        <i data-lucide="chevron-down" class="w-8 h-8 text-cimmyt-marine"></i>
        <code class="text-[10px] text-gray-400">chevron-down</code>
    </div>
</div>
`, "Max 3 examples with data-lucide attributes."));

// 4. BUTTONS
snippets.push(Section('Buttons', `
<div class="flex flex-wrap gap-4 items-center">
    <button class="btn btn-primary">Primary Action</button>
    <button class="btn btn-outline-primary">Secondary Action</button>
    <button class="btn btn-info">Info</button>
    <button class="btn btn-warning">Warning</button>
    <button class="btn btn-danger">Danger</button>
    <button class="btn-portal-primary">Portal Primary</button>
</div>
`));

// 5. HEADERS
snippets.push(Section('Header (Logout)', `
<header class="grid grid-cols-3 bg-white p-4 items-center shadow-sm">
    <div class="logo">
        <img class="h-12" src="img/CIMMYTIncincolor.png" alt="">
    </div>
    <nav>
        <ul class="flex items-center h-16 space-x-8">
            <li><a href="#" class="btn-menu-header active">Home</a></li>
            <li><a href="#" class="btn-menu-header">Service Brochure</a></li>
            <li><a href="#" class="btn-menu-header">Service Categories</a></li>
        </ul>
    </nav>
    <div class="flex justify-end items-center gap-4">
        <a href="#" class="btn btn-info">Log In</a>
        <a href="#" class="btn btn-warning font-bold">Register</a>
    </div>
</header>
`));

snippets.push(Section('Header (Logged In)', `
<header class="grid grid-cols-3 bg-white p-4 border-b border-gray-100">
    <div class="logo">
        <img class="h-12" src="img/CIMMYTIncincolor.png" alt="">
    </div>
    <nav>
        <ul class="flex items-center h-16 space-x-8">
            <li><a href="#" class="btn-menu-header">Hub Home</a></li>
            <li><a href="#" class="btn-menu-header">Brochure</a></li>
            <li class="relative group">
                <button class="flex items-center gap-1 btn-menu-header">
                    Services
                    <i data-lucide="chevron-down" class="w-3 h-3"></i>
                </button>
            </li>
        </ul>
    </nav>
    <div class="flex justify-end items-center gap-4">
        <div class="flex items-center gap-3 p-1 rounded-full hover:bg-gray-50 transition-colors cursor-pointer">
            <div class="w-9 h-9 rounded-full bg-cimmyt-orange flex items-center justify-center text-white font-bold text-sm">FB</div>
            <div class="hidden sm:block text-left">
                <div class="text-sm font-bold text-gray-800 leading-none">Foo Bar</div>
                <div class="text-[10px] text-cimmyt-gray">f.bar@cgiar.org</div>
            </div>
            <i data-lucide="chevron-down" class="w-4 h-4 text-gray-400"></i>
        </div>
    </div>
</header>
`));

// 6. SIDEBAR
snippets.push(Section('Sidebar', `
<div class="w-64 bg-cimmyt-green text-white min-h-[400px] p-4 rounded-xl flex flex-col relative">
    <button class="absolute -right-3 top-8 bg-cimmyt-orange text-white rounded-full p-2 shadow-lg">
        <i data-lucide="menu" class="w-4 h-4"></i>
    </button>
    <nav class="space-y-1">
        <a href="#" class="flex items-center gap-4 p-3 rounded-lg bg-white/10">
            <i data-lucide="house" class="w-5 h-5"></i>
            <span>Hub</span>
        </a>
        <div class="p-3 flex justify-between items-center rounded-lg hover:bg-white/10 cursor-pointer">
            <div class="flex gap-4 items-center">
                <i data-lucide="building-2" class="w-5 h-5"></i>
                <span>Admin</span>
            </div>
            <i data-lucide="chevron-down" class="w-4 h-4"></i>
        </div>
        <div class="pl-9 space-y-1 text-sm text-white/80">
            <a href="#" class="block p-2 hover:text-white">Staff</a>
            <a href="#" class="block p-2 hover:text-white">Organizations</a>
        </div>
    </nav>
</div>
`));

// 7. BREADCRUMBS
snippets.push(Section('Breadcrumbs', `
<nav aria-label="Ruta de navegación" class="py-3">
    <ol class="flex items-center space-x-2 text-sm text-gray-600 font-avenir">
        <li>
            <a href="#" class="flex items-center gap-1 hover:text-cimmyt-green transition-colors font-bold text-cimmyt-marine">
                <i data-lucide="house" class="w-4 h-4"></i>
                <span>Hub Home</span>
            </a>
        </li>
        <li class="text-gray-400">
            <i data-lucide="chevron-right" class="w-4 h-4"></i>
        </li>
        <li>
            <a href="#" class="hover:text-cimmyt-green transition-colors">Services</a>
        </li>
        <li class="text-gray-400">
            <i data-lucide="chevron-right" class="w-4 h-4"></i>
        </li>
        <li class="font-bold text-cimmyt-green">Brochure</li>
    </ol>
</nav>
`));

// 8. DATA TABLE
snippets.push(Section('Data Table', `
<div class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
    <table class="table-stylish w-full">
        <thead>
            <tr>
                <th>Species/Organism</th>
                <th>Service Requested</th>
                <th class="text-right">Plate</th>
                <th class="text-center">Status</th>
                <th class="text-center">Admin</th>
            </tr>
            <tr class="filter-row">
                <td><input type="text" placeholder="Filter..." class="text-xs"></td>
                <td><input type="text" placeholder="Filter..." class="text-xs"></td>
                <td><input type="number" class="text-right text-xs"></td>
                <td>
                    <select class="text-xs w-full">
                        <option>All</option>
                    </select>
                </td>
                <td></td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="font-medium">Triticum aestivum</td>
                <td>Genotyping Services</td>
                <td class="text-right">12</td>
                <td class="text-center"><span class="completed">Completed</span></td>
                <td class="text-center"><i data-lucide="trash-2" class="w-4 h-4 text-gray-300 hover:text-red-500 cursor-pointer mx-auto"></i></td>
            </tr>
            <tr>
                <td class="font-medium">Zea mays</td>
                <td>Molecular Analysis</td>
                <td class="text-right">5</td>
                <td class="text-center"><span class="pending">Pending</span></td>
                <td class="text-center"><i data-lucide="trash-2" class="w-4 h-4 text-gray-300 hover:text-red-500 cursor-pointer mx-auto"></i></td>
            </tr>
        </tbody>
    </table>
</div>
`));

// 9. PAGINATION
snippets.push(Section('Pagination', `
<div class="flex justify-between items-center bg-white p-4 border rounded-xl border-gray-100 shadow-sm">
    <div class="flex items-center gap-4">
        <span class="text-xs text-cimmyt-gray font-bold uppercase tracking-wider">Rows per page:</span>
        <select class="border border-gray-200 rounded-lg px-2 py-1 text-sm bg-gray-50 outline-none">
            <option>10</option>
            <option>25</option>
            <option>50</option>
        </select>
    </div>
    <div class="flex items-center gap-3">
        <span class="text-xs text-cimmyt-gray font-bold uppercase">Page 1 of 10</span>
        <div class="flex gap-2">
            <button class="p-2 border border-gray-100 rounded-lg bg-gray-50 text-gray-400 hover:bg-gray-100 transition-colors">
                <i data-lucide="chevron-left" class="w-4 h-4"></i>
            </button>
            <button class="p-2 border border-gray-100 rounded-lg bg-white shadow-sm text-cimmyt-green hover:bg-green-50 transition-colors">
                <i data-lucide="chevron-right" class="w-4 h-4"></i>
            </button>
        </div>
    </div>
</div>
`));

// 10. FORMS
snippets.push(Section('Login Form (Complex Options)', `
<div class="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden max-w-lg mx-auto">
    <div class="bg-cimmyt-marine p-6 flex items-center gap-3 text-white">
        <i data-lucide="users" class="w-5 h-5"></i>
        <span class="font-bold uppercase tracking-widest text-sm">Authentication</span>
    </div>
    <div class="p-8 space-y-6">
        <button class="w-full py-3 bg-cimmyt-green text-white font-bold rounded-xl shadow-lg shadow-green-900/10 hover:bg-green-800 transition-all text-sm uppercase tracking-widest">
            Sign in with account
        </button>
        <div class="relative py-2 hidden md:block">
            <div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-100"></div></div>
            <div class="relative flex justify-center text-xs uppercase"><span class="bg-white px-2 text-gray-400">Or use socials</span></div>
        </div>
        <div class="space-y-3">
            <button class="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-200 rounded-xl text-sm font-semibold hover:bg-gray-50 transition shadow-sm">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="MS" class="w-4 h-4">
                Microsoft
            </button>
            <button class="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-200 rounded-xl text-sm font-semibold hover:bg-gray-50 transition shadow-sm">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="G" class="w-4 h-4">
                Google
            </button>
        </div>
    </div>
</div>
`));

snippets.push(Section('Form Inputs (Standard)', `
<div class="space-y-6 max-w-md bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
    <div class="space-y-2">
        <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
        <div class="relative group">
            <i data-lucide="user" class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within:text-cimmyt-green transition-colors"></i>
            <input type="text" class="form-input-portal pl-12" placeholder="John Doe">
        </div>
    </div>
    <div class="space-y-2">
        <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
        <div class="relative group">
            <i data-lucide="mail" class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within:text-cimmyt-green transition-colors"></i>
            <input type="email" class="form-input-portal pl-12" placeholder="email@organization.org">
        </div>
    </div>
    <div class="space-y-2">
        <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Category Select</label>
        <div class="relative">
            <select class="form-input-portal appearance-none bg-transparent relative z-10 pr-10">
                <option value="" disabled selected>Select option...</option>
                <option>Molecular Analyses</option>
                <option>Genotyping Service</option>
            </select>
            <i data-lucide="chevron-down" class="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"></i>
        </div>
    </div>
    <div class="flex items-start gap-3 mt-4">
        <input type="checkbox" id="demo-check" class="checkbox mt-0.5">
        <label for="demo-check" class="text-xs text-gray-500 font-medium">I accept the terms and conditions.</label>
    </div>
</div>
`));

// 11. CARDS
snippets.push(Section('Service Cards', `
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
    <div class="card-service flex flex-col">
        <div class="card-title mb-4">
            <h3 class="font-bold text-lg text-cimmyt-marine font-circle-slab">Molecular Analyses</h3>
        </div>
        <div class="bg-cimmyt-green-20/30 p-4 rounded-xl mb-4 border border-cimmyt-green-20">
             <i data-lucide="microscope" class="w-8 h-8 text-cimmyt-green"></i>
        </div>
        <div class="card-body text-sm text-gray-600 space-y-2 flex-1">
            <p>Our lab provides state-of-the-art DArTseq and high-throughput genotyping services.</p>
        </div>
        <div class="mt-6 border-t border-gray-100 pt-4">
            <button class="btn btn-outline-primary w-full shadow-sm">More Details</button>
        </div>
    </div>
    <div class="card-service flex flex-col scale-95 opacity-80 hover:scale-100 hover:opacity-100 transition-all border-dashed">
        <div class="card-title mb-4">
            <h3 class="font-bold text-lg text-gray-400 font-circle-slab">Locked Service</h3>
        </div>
        <div class="bg-gray-50 p-4 rounded-xl mb-4 flex-1 flex flex-col items-center justify-center border border-gray-100">
             <i data-lucide="lock" class="w-8 h-8 text-gray-300"></i>
             <p class="text-[10px] uppercase font-bold text-gray-300 mt-2 tracking-widest">Sign in to view</p>
        </div>
    </div>
</div>
`));

// 12. NEW STRUCTURAL COMPONENTS (TABS & ACCORDION)
snippets.push(Section('Tabs (Structural)', `
<div class="space-y-4">
    <div class="flex border-b border-gray-100">
        <button class="px-6 py-3 text-sm font-black uppercase tracking-widest text-cimmyt-green border-b-2 border-cimmyt-green">Active Tab</button>
        <button class="px-6 py-3 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-cimmyt-marine transition-colors">Inactive Tab</button>
        <button class="px-6 py-3 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-cimmyt-marine transition-colors">Notifications</button>
    </div>
    <div class="p-6 bg-white border border-gray-50 rounded-xl shadow-sm">
        <p class="text-sm text-gray-500 italic">This is the content container for the active tab.</p>
    </div>
</div>
`));

snippets.push(Section('Accordion (Vertical)', `
<div class="space-y-2 max-w-2xl">
    <!-- Open Item -->
    <div class="border border-gray-100 rounded-xl overflow-hidden shadow-sm bg-white">
        <button class="w-full flex justify-between items-center p-4 bg-gray-50/50 hover:bg-gray-50 transition-colors">
            <span class="font-bold text-cimmyt-marine text-sm uppercase tracking-wide">What is the turnaround time?</span>
            <i data-lucide="chevron-up" class="w-4 h-4 text-cimmyt-green"></i>
        </button>
        <div class="p-4 text-sm text-gray-600 border-t border-gray-50 bg-white">
            Usually 4-6 weeks depending on service load and sample quality.
        </div>
    </div>
    <!-- Closed Item -->
    <div class="border border-gray-100 rounded-xl overflow-hidden bg-white">
        <button class="w-full flex justify-between items-center p-4 hover:bg-gray-50 transition-colors">
            <span class="font-bold text-gray-700 text-sm uppercase tracking-wide">Do you ship internationally?</span>
            <i data-lucide="chevron-down" class="w-4 h-4 text-gray-300"></i>
        </button>
    </div>
</div>
`));

// 13. FLOAT ELEMENTS (Badges & Tags)
snippets.push(Section('Status Badges / Float Elements', `
<div class="flex flex-wrap gap-4 items-center bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-200">
    <span class="completed">Completed</span>
    <span class="in-progress">In Progress</span>
    <span class="pending">Pending</span>
    <span class="cancelled">Cancelled</span>
    <span class="on-hold">On Hold</span>
    <div class="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-[10px] font-bold shadow-lg animate-pulse">LIVE</div>
</div>
`));

// 14. FOOTER
snippets.push(Section('Footer', `
<footer class="bg-cimmyt-blue text-white p-10 rounded-2xl">
    <nav aria-label="Enlaces corporativos">
        <ul class="flex flex-col md:flex-row gap-4 items-center justify-center text-sm font-avenir">
            <li><a href="#" class="hover:underline">Privacidad</a></li>
            <li class="hidden md:block opacity-40">|</li>
            <li class="opacity-80">Copyright © 2026 CIMMYT Inc. All rights reserved.</li>
            <li class="hidden md:block opacity-40">|</li>
            <li class="font-mono text-xs text-white/60">Version 2.0.0</li>
        </ul>
    </nav>
</footer>
`));

const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CIMMYT - Component Library</title>
    <link rel="stylesheet" href="css/output.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css">
    <style>
        html { scroll-behavior: smooth; }
        .lib-layout { display: flex; min-height: 100vh; }
        .lib-sidebar { width: 280px; position: sticky; top: 0; height: 100vh; overflow-y: auto; background: white; border-right: 1px solid #f1f5f9; z-index: 50; padding: 2rem 1rem; }
        .lib-main { flex: 1; padding: 3rem; background: #fafafa; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
        .lib-nav-link { display: block; padding: 0.5rem 1rem; border-radius: 0.5rem; font-size: 0.875rem; color: #64748b; font-weight: 500; transition: all 0.2s; }
        .lib-nav-link:hover { background: #f8fafc; color: #76bc21; }
    </style>
</head>
<body class="antialiased font-avenir">
    
    <div class="lib-layout">
        <aside class="lib-sidebar shadow-xl flex flex-col gap-6">
            <div class="px-3">
                <img src="img/CIMMYTIncincolor.png" class="h-10 mb-2">
                <h1 class="text-xs font-black uppercase tracking-tighter text-gray-400">Component Library</h1>
            </div>
            <nav class="flex flex-col gap-1 overflow-y-auto pr-2">
                ${snippets.map(s => {
                    const match = s.match(/id="([^"]+)"/);
                    const id = match ? match[1] : "";
                    const title = s.match(/<h2[^>]*>([^<]+)<\/h2>/)[1];
                    return `<a href="#${id}" class="lib-nav-link">${title}</a>`;
                }).join('\n')}
            </nav>
        </aside>

        <main class="lib-main">
            <div class="max-w-5xl mx-auto">
                <div class="mb-12">
                    <h1 class="font-circle-slab text-5xl text-cimmyt-marine font-bold mb-2">Internal Documentation</h1>
                    <p class="text-gray-400">Standardized UI components for the CIMMYT Service Portal.</p>
                </div>
                
                ${snippets.join('\n\n')}
            </div>
        </main>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <script>
        hljs.highlightAll();
        lucide.createIcons();
    </script>
</body>
</html>`;

fs.writeFileSync('elements.html', htmlTemplate);
console.log("Successfully generated elements.html with high fidelity components!");
