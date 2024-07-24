const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;


const randomRange = (max, min) => Math.random() * (max - min) + min;

const colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];


class Drop {
    drop = document.createElement('div');

    calcSpawnPosition() {
        return Math.random() * windowWidth;
    }

    init() {
        this.drop.className = `drop`;
        this.drop.style.backgroundColor = colors.at(randomRange(0, colors.length));
        this.drop.style.left = this.calcSpawnPosition() + 'px';  
        document.body.append(this.drop);

        setTimeout(() => {
            this.drop.style.transform = `translate3d(0px, ${windowHeight - randomRange(0, 100)}px, 0px)`;
        }, 50)
        setTimeout(() => {
            this.drop.style.width = '10px';
            this.drop.style.height = '1px';
            setTimeout(() => {
                document.body.removeChild(this.drop);    
            }, 250)            
        }, 550)
    }
}

class Rain {
    init() {
        setInterval(() => {
            const newDrop = new Drop();

            newDrop.init();

        }, 25)
    }
}


const rain = new Rain();


rain.init();

