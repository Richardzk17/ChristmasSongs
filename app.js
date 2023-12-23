const treeBtn = document.querySelector('#tree')

treeBtn.addEventListener('click', () => {
    randomSite()
})

let christmasMusic = [
    'https://www.youtube.com/watch?v=aAkMkVFwAoo',
    'https://www.youtube.com/watch?v=E8gmARGvPlI',
    'https://www.youtube.com/watch?v=Gqwk7uR1BI8',
    'https://www.youtube.com/watch?v=N8NcQzMQN_U',
    'https://www.youtube.com/watch?v=TFsZy9t-qDc',
    'https://www.youtube.com/watch?v=AN_R4pR1hck',
    'https://www.youtube.com/watch?v=j3fSknbR7Y4',
    'https://www.youtube.com/watch?v=nYmPZrvThW8',
    'https://www.youtube.com/watch?v=44bL90HP0Ys',
    'https://www.youtube.com/watch?v=9UeGgZVQXhc',
    'https://www.youtube.com/watch?v=4EvZOXEoJ84',
    'https://www.youtube.com/watch?v=3KK6sMo8NBY',
    'https://www.youtube.com/watch?v=94Ye-3C1FC8',
    'https://www.youtube.com/watch?v=3ZT9_H4-hbM',
    'https://www.youtube.com/watch?v=-Jdc7FXupWQ',
    'https://www.youtube.com/watch?v=_bdncLInRvw',
    'https://www.youtube.com/watch?v=k6zW225k_O0',
    'https://www.youtube.com/watch?v=e_AMTbO50vU',
    'https://www.youtube.com/watch?v=nlR0MkrRklg',
    'https://www.youtube.com/watch?v=pw3PhhSfcQg',
    'https://www.youtube.com/watch?v=Sy0A0pQmGPM',
    'https://www.youtube.com/watch?v=Plu7hNalCEY',
    'https://www.youtube.com/watch?v=2LbmhneqBnE',
    'https://www.youtube.com/watch?v=gset79KMmt0',
    'https://www.youtube.com/watch?v=t3zqFusFXis',
    'https://www.youtube.com/watch?v=cGSneujgGT8',

]

function randomSite() {
    let i = parseInt(Math.random() * christmasMusic.length)
    window.open(christmasMusic[i], "_blank")
}