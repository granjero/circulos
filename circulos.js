function setup() {
    createCanvas(windowWidth, windowHeight);
    //windowWidth >= windowHeight
        //? createCanvas(windowHeight, windowHeight)
        //: createCanvas(windowWidth, windowWidth);
    background(255);
    noLoop();
    frameRate(1);
}

function draw(){
    background(255);
    let dibujar = new Composicion;
    dibujar.fondo();
}

class Composicion {
    constructor() {
    }

    fondo() {
        let medida = floor(width / 100);
        let diametro = medida * 7;
        for(let i = 0; i < width; i+= medida) {
            for(let j = 0; j < height; j+= medida) {
                let  color = this.colorDeFondo();
                //console.log(color);
                stroke(color[0], color[1], color[2], color[3]);
                fill(color[0], color[1], color[2], color[3]);
                circle(i + this.masMenosCinco() , j + this.masMenosCinco(), diametro);
                square(i + this.masMenosCinco() , j + this.masMenosCinco(), diametro);
                square(i + this.masMenosCinco() + medida / 2 , j + this.masMenosCinco(), diametro);
                circle(i + this.masMenosCinco() + medida / 2 , j + this.masMenosCinco(), diametro);
                square(i + this.masMenosCinco(), j + this.masMenosCinco() + medida / 2, diametro);
                circle(i + this.masMenosCinco(), j + this.masMenosCinco() + medida / 2, diametro);

            }
        }
    }

    masMenosCinco () {
        return floor(random(-5, 6));
    }

    colorDeFondo() {
        let r = floor(random(220, 230));
        let g = floor(random(200, 220));
        let b = floor(random(190, 215));
        let alpha = floor(random(40, 70))
        return [r,g,b, alpha];
    }
} 
