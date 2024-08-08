import React, { useEffect } from 'react';
import {
    animate,
    motion,
    useMotionTemplate,
    useMotionValue,
} from 'framer-motion';
import { BsMouse3, BsMouse3Fill } from 'react-icons/bs';

const COLORS = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C'];

function Introduction() {
    const color = useMotionValue(COLORS[0]);
    const backgroundImage = useMotionTemplate`radial-gradient(125% 150% at 25% 0%, #020617 50%, ${color})`;

    useEffect(() => {
        animate(color, COLORS, {
            ease: 'easeInOut',
            duration: 10,
            repeat: Infinity,
            repeatType: 'mirror',
        });
    }, []);

    //stars canvas
    useEffect(() => {
        const canvas = document.querySelector('.stars');
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        function random(min, max) {
            return min + Math.random() * (max + 1 - min);
        }

        window.addEventListener('resize', function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            stars();
        });

        function stars() {
            const canvasSize = canvas.width * canvas.height;
            const starsFraction = canvasSize / 2000;

            for (let i = 0; i < starsFraction; i++) {
                //Set up random elements
                let xPos = random(2, canvas.width - 2);
                let yPos = random(2, canvas.height - 2);
                let alpha = random(0.5, 1);
                let size = random(0.25, 0.25);

                ctx.fillStyle = '#ffffff';
                ctx.globalAlpha = alpha;
                ctx.fillRect(xPos, yPos, size, size);
            }
        }

        //Add the stars
        stars();
    }, []);

    return (
        <motion.section
            style={{ backgroundImage }}
            className='introduction--section'
        >
            <div className='introduction-wrapper'>
                <h2>
                    Hey, <br /> I’m Hubert
                </h2>

                <p className='introduction__description'>
                    an open minded, creative junior frontend developer from
                    Poland
                </p>
            </div>

            <div className='scroll-Suggestion'>
                <BsMouse3 className='icon' />
            </div>

            <canvas class='stars'></canvas>
        </motion.section>
    );
}

export default Introduction;
