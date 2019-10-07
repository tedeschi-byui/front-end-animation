new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    easingcss3: 'ease',
    loopBottom: true,
    onLeave: (origin, destination, direction) => { 
        const section = destination.item;
        const title = section.querySelector('h1');
        const tl = new TimelineMax({delay: 0.5});
        tl.fromTo(title, 0.5, { y: '50', opacity: 0 }, { y: 0, opacity: 1 });

        if (destination.index === 1) {
            // const chairs = document.querySelector('.chair');
            const desc = document.querySelector('.description');

            // tl.fromTo(chairs, 0.5, { x: '100%' }, { x: '-40%' }, '-=.7')
                tl.fromTo(desc, 0.5, { y: '100', opacity: 0 }, { y: '50', opacity: 1 }, '-=.5')
        }
    }
})