/**
 * @jest-environment jsdom
 */

const { shakeEightBall, answers } = require('./script');

describe('shakeEightBall', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <div class="eight-ball-inner" id="eightBallInner">
                <div class="answer" id="answer">Ask me anything...</div>
            </div>
        `;
    });

    test('should set answer text to one of the predefined answers', () => {
        const answerElement = document.getElementById('answer');

        shakeEightBall();
        
        expect(answers).toContain(answerElement.textContent);
    });

    test('should add and remove animation class', () => {
        const eightBallInner = document.getElementById('eightBallInner');

        shakeEightBall();
        
        expect(eightBallInner.classList.contains('animate')).toBe(true);
        
        setTimeout(() => {
            expect(eightBallInner.classList.contains('animate')).toBe(false);
        }, 200);
    });
});
