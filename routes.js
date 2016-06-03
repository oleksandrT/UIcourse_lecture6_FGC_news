// Articles content
var articles = [
    {
        id: 1,
        title: 'World\'s longest and deepest rail tunnel to open in Switzerland',
        excerpt: 'The world\'s longest and deepest rail tunnel is to be officially opened in Switzerland, after almost two decades of construction work.',
        body: 'The 57km (35-mile) twin-bore Gotthard base tunnel will provide a high-speed rail link under the Swiss Alps between northern and southern Europe.<br> Switzerland says it will revolutionise European freight transport. Goods currently carried on the route by a million lorries a year will go by train instead.'
    },
    {
        id: 2,
        title: 'Alice in Wonderland’s hidden messages',
        excerpt: 'Is Lewis Carroll’s tale really about sex, drugs and colonialism?',
        body: '<strong>Is Lewis Carroll’s tale really about sex, drugs, and colonialism? Some say yes. Others argue it’s about eating disorders or the Wars of the Roses. Hephzibah Anderson takes a look.</strong> The book began life humbly, as entertainment for 10-year-old Alice Liddell and her sisters as they boated on the Thames with one Charles Dodgson. It proved such a hit that Alice persuaded Dodgson to transcribe it, which he duly did – using the nom de plume Lewis Carroll. Alice was the daughter of the dean of Christ Church, the Oxford college where Dodgson taught mathematics, and she wasn’t the only young girl he befriended. To the 21st Century mind, there is something that makes one deeply uneasy about this scenario. Though there is no evidence of anything untoward in Dodgson’s relationships, it’s hard not to view as suspect a grown man who enjoyed having his young playmates sit on his lap and pose for photographs, often under-dressed.'
    },
    {
        id: 3,
        title: 'Clint Eastwood: The One And Only',
        excerpt: 'Exploring the incomparable and still vital career of Clint Eastwood.',
        body: '<p>Clint Eastwood is 86 today, and to commemorate the occasion of his ongoing and still-vital career as a filmmaker I offer the proposition that there’s never been anyone like him, and never will be again. This isn’t a subscription to some kind of theory that every human being is a special snowflake — and good God, can you imagine the squint and growl Clint Eastwood would give forth if you called him a snowflake? — but a recognition that the timing of his ascent led to a place in the history of cinema that would have been impossible at any other point, and this is even before his durability and versatility come into discussion. (In fact, I have a theory as to the source of both of those qualities, that we’ll address shortly.)</p><p>After serving in the Army during the Korean War, Eastwood pursued a career in acting, and in fairly short order was cast as the lead on the TV Western Rawhide. The role, while one Eastwood never particularly enjoyed playing, nevertheless paved the way to his crossover into movie stardom in the form of Sergio Leone’s epochal “Dollars” trilogy. Purely in terms of stardom, the rest is history. As far as the nature of Eastwood’s stardom, he was the first major actor to parlay television celebrity into film stardom, which was bound to happen eventually but he was still the first. The time that this all happened, thanks to historical syncronicity, was at the exact time that world cinema — particularly in Europe — was taking a collective look back at its history and applying a critical eye to genre traditions. Leone’s work with the Western was a major part of this cinematic moment, and in Eastwood, he had the perfect actor for such work.</p>'
    },
    {
        id: 4,
        title: 'The documentary that will prove the Yeti exists. Almost certainly',
        excerpt: 'It’s a myth that has endured for centuries, but is the creature claptrap, a polar bear hybrid – or an Aryan uber-hominid the Nazis were sent off to seek? Meet the Yeti hunters.',
        body: '<p>Yetis! The myth has endured for centuries, but despite its longevity, there are really only two sides of the debate you can sit on. In the boringly scientific camp: those who believe that all sightings come from gassed idiots who don’t know nature when they see it. In the other, fantastical unsolved mysteries camp, are those with more of a swivel-eyed crypto-conspiracy angle. The latter sort of claptrap is typically absent in mainstream science and nature documentaries and, frankly, the genre is poorer for it. But now, Mark Evans combines both sides in beautiful neeky harmony in Yeti: Myth, Man Or Beast? (Sunday, 8pm, Channel 4).</p><p>Evans is exactly the man to take these conflicting arguments and forge an almost-serious documentary out of them. He has the sensible air of a substitute teacher well up for some staffroom biscuit banter. He knows big words and says them with authority, yet also has a leather jacket. Like I say, perfect for the job. As far as Evans is concerned, the yeti doesn’t have to be mythical: it could be a polar bear hybrid or a relic of the Denisova hominin, a branch of human long thought to be extinct. Such a theory is at the very forefront of scientific thinking – geneticists only started focusing on Denisovan DNA six years ago. If a 48-minute Channel 4 documentary isn’t the place to explore this exciting new frontier of knowledge, I don’t know what is.</p>'
    },
    {
        id: 5,
        title: 'China\'s Silicon Valley: Lawns and pools but no free food',
        excerpt: 'Over the past 20 years a patch of ground in one of China\'s fastest growing cities has been transformed into a local version of Silicon Valley.',
        body: '<p>This is the home of Huawei, on the outskirts of the industrial city of Shenzhen.</p><p>The campus of about 500 acres now houses nearly 60,000 employees, reflecting the company\'s growth from local telecoms equipment provider to global tech powerhouse selling network gear and smart devices.</p><p>CNNMoney was granted rare access to see what it\'s like inside a Silicon Valley-style tech campus -- with Chinese characteristics.</p>'
    },
    {
        id: 6,
        title: 'Check out Mars tonight: It\'s closer to Earth than it has been in 11 years',
        excerpt: 'As you wind down from your Memorial Day festivities tonight, take a minute to find Mars glowing yellow and bright in the eastern sky.',
        body: '<p>On the evening of May 30,  the Red Planet will come closer to Earth than it has in 11 years.</p><p>Because Mars and Earth are so close to each other tonight, our planetary neighbor will be shining especially bright in the night sky.</p><p>“Just look southeast after the end of twilight, and you can’t miss it,” Alan MacRobert, senior editor of Sky & Telescope, said in a statement. “Mars looks almost scary now, compared to how it normally looks.”</p><p>The distance between Mars and Earth varies greatly depending on where in their orbits the two planets are.</p><p>It takes Mars 687 Earth days to make its trip around the sun, compared with the Earth’s 365 days. That means that Earth makes about two turns around the sun to every one that Mars makes. The two planets pass by each other about once every 26 months.</p>'
    }
];


// Routes
module.exports = function (app) {

    app.get('/', function (req, res) {
        res.render('index.hbs', {
            title: 'Welcome to FGC news',
            articles: articles
        });
    });

    app.get('/:id', function (req, res) {
        var id = req.params.id;
        console.log('id: ', id);
        res.render('article.hbs', {
            title: articles[id].title,
            body: articles[id].body
        });
    });

    app.get('/add', function (req, res) {
        res.render('addnew.hbs');
    });

    app.post('/add', function (req, res) {
        var articlesLength = articles.length;
        articles.push({
            id: articlesLength + 1,
            title: req.body.title,
            excerpt: req.body.content,
            body: req.body.content
        });
        res.render('addnew.hbs', {
            confirmation: true,
            title: req.body.title,
            body: req.body.content
        });
    });

};