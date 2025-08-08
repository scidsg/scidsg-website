const lines = [
    [
        { type: 'text', text: "👋 Hi, we're Science & Design, Inc., a 501(c)(3) non-profit based in the United States that makes free and open-source software focusing on free access to information and free speech online." }
    ],
    [
        { type: 'text', text: "We were the first non-profit in the US to launch a software-as-a-service whistleblower platform, called" },
        {
            type: 'hl',
            text: "Hush Line",
            card: {
                title: "Hush Line",
                url: "https://hushline.app",
                text: "End-to-end encrypted tip lines for organizations and individuals.",
                img: "./img/hushline.webp",
                alt: "Hush Line interface screenshot"
            }
        },
        { type: 'text', text: ". Our platform offers end-to-end encrypted, anonymous tip lines for lawyers, journalists, educators, and more, and has users from organizations including Whistleblower Partners, LLP, Whistleblowers of America, NPR, LA Times, Bloomberg, HuffPost, ABC News, and BBC." },
    ],
    [
        { type: 'text', text: "We help other organizations with software development, and built the publishing platform for" },
        {
            type: 'hl',
            text: "Distributed Denial of Secrets",
            card: {
                title: "Distributed Denial of Secrets",
                url: "https://ddosecrets.com",
                text: "A 501(c)(3) publishing and archiving hacked and leaked data in the public interest.",
                img: "./img/ddosecrets.webp",
                alt: "DDoSecrets site preview"
            }
        },
        { type: 'text', text: ". Working with the team, we created a multi-user, journalistic, editorial-themed platform that supports a wide corpus of global data." }
    ],
    [
        { type: 'text', text: "Our Board is the best in the biz, with people who've dedicated their careers to protecting privacy online." },
        {
            type: 'hl',
            text: "Glenn Sorrentino",
            card: {
                title: "Glenn Sorrentino",
                text: "Executive Director, Science & Design, Inc.",
                img: "./img/glenn.png",
                alt: "Glenn Sorrentino, Executive Director of Science & Design, Inc."
            }
        },
        { type: 'text', text: "is a patent-awarded product designer, and a longtime contributor to open-source tools including Signal, OnionShare, and CalyxOS." },
        {
            type: 'hl',
            text: "Micah Lee",
            card: {
                title: "Micah Lee",
                text: "Director, Science & Design, Inc.",
                img: "./img/micah.png",
                alt: "Micah Lee, Director of Science & Design, Inc."
            }
        },
        { type: 'text', text: ", is a journalist, software developer, the IT-support behind Edward Snowden's disclosures in 2013." },
        {
            type: 'hl',
            text: "Elijah Waxwing",
            card: {
                title: "Elijah Waxwing",
                text: "Director, Science & Design, Inc.",
                img: "./img/elijah.png",
                alt: "Elijah Waxwing, Director of Science & Design, Inc."
            }
        },
        { type: 'text', text: " is a co-founder of Riseup.net, an organization providing online communication tools for people and groups working on liberatory social change since 1999." },
        {
            type: 'hl',
            text: "Serene",
            card: {
                title: "Serene",
                text: "Director, Science & Design, Inc.",
                img: "./img/serene.png",
                alt: "Serene, Director of Science & Design, Inc."
            }
        },
        { type: 'text', text: " is the creator of the Snowflake pluggable transport for The Tor Project and founder of Snowstorm, a new microproxy VPN that can't be censored." },
        {
            type: 'hl',
            text: "Stefanie Daehler",
            card: {
                title: "Stefanie Daehler",
                text: "Director, Science & Design, Inc.",
                img: "./img/stef.png",
                alt: "Stefanie Daehler, Director of Science & Design, Inc."
            }
        },
        { type: 'text', text: " is our Treasurer and Secretary. Her background is in education, and has served in leadership positions in the New York Public Schools System and in private schools in Los Angeles." },
    ],
    [
        { type: 'text', text: "To get in touch with us, please send an email to hello@scidsg.org, or a Signal message to @scidsg.01." },
    ],
];

const WORD_DELAY = 150;
const SENTENCE_PAUSE = 500;
const LINE_PAUSE = 1000;

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const D_WORD = reduceMotion ? 0 : WORD_DELAY;
const D_SENT = reduceMotion ? 0 : SENTENCE_PAUSE;
const D_LINE = reduceMotion ? 0 : LINE_PAUSE;

const textRoot = document.getElementById('text');

function createPartNode(part) {
    if (part.type === 'text') return document.createTextNode('');

    if (part.type === 'hl') {
        const wrap = document.createElement('span');
        wrap.className = 'highlight';
        wrap.setAttribute('tabindex', '0');

        const textNode = document.createTextNode('');

        const card = document.createElement('div');
        card.className = 'highlight-card';

        // Support both string and object forms
        if (typeof part.card === 'string') {
            const p = document.createElement('p');
            p.className = 'card-text';
            p.textContent = part.card;
            card.appendChild(p);
        } else if (part.card && typeof part.card === 'object') {
            if (part.card.img) {
                const media = document.createElement('div');
                media.className = 'card-media';
                const img = document.createElement('img');
                img.loading = 'lazy';
                img.decoding = 'async';
                img.src = part.card.img;
                img.alt = part.card.alt || '';
                media.appendChild(img);
                card.appendChild(media);
            }
            if (part.card.title) {
                if (part.card.url) {
                    const link = document.createElement('a');
                    link.href = part.card.url;
                    link.target = '_blank';
                    link.rel = 'noopener noreferrer';
                    link.className = 'card-title';
                    link.textContent = part.card.title;
                    card.appendChild(link);
                } else {
                    const h = document.createElement('div');
                    h.className = 'card-title';
                    h.textContent = part.card.title;
                    card.appendChild(h);
                }
            }
            if (part.card.text) {
                const p = document.createElement('p');
                p.className = 'card-text';
                p.textContent = part.card.text;
                card.appendChild(p);
            }
        }

        wrap.appendChild(textNode);
        wrap.appendChild(card);

        wrap.__targetText = part.text;
        wrap.__textNode = textNode;
        return wrap;
    }

    return document.createTextNode('');
}

function createLineContainer() {
    const line = document.createElement('span');
    line.className = 'line';
    return line;
}

function startsWithAlnum(str) {
    const m = str.match(/\S/);
    return m ? (/^[\p{L}\p{N}]/u).test(m[0]) : false;
}
function endsSentence(token) {
    return /^[.!?…]+$/.test(token) || /[.!?…]["’”)\]]?$/.test(token);
}
function tokenizeWords(s) {
    return s.split(/(\s+|&)/).filter(t => t.trim() !== '');
}
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function revealAll() {
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const lineEl = createLineContainer();
        textRoot.appendChild(lineEl);

        const nodes = line.map(createPartNode);
        nodes.forEach((n, idx) => {
            if (idx > 0 && startsWithAlnum(line[idx].text)) {
                lineEl.appendChild(document.createTextNode(' '));
            }
            lineEl.appendChild(n);
        });

        const cursor = document.createElement('span');
        cursor.className = 'cursor';
        lineEl.appendChild(cursor);

        for (let idx = 0; idx < line.length; idx++) {
            const part = line[idx];
            const node = nodes[idx];
            if (part.type === 'text') {
                await revealWords(node, part.text);
            } else if (part.type === 'hl') {
                await revealWords(node.__textNode, node.__targetText);
            }
        }

        cursor.remove();
        await sleep(D_LINE);
    }
}

async function revealWords(textNode, full) {
    const tokens = tokenizeWords(full);
    for (let i = 0; i < tokens.length; i++) {
        const tok = tokens[i];
        const isWordyStart = /^[\p{L}\p{N}@#]/u.test(tok);
        const needsSpace = textNode.data && (isWordyStart || tok === '&');
        textNode.data += (needsSpace ? ' ' : '') + tok;
        await sleep(endsSentence(tok) ? D_SENT : D_WORD);
    }
}

revealAll();
