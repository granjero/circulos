function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    noLoop();
    frameRate(1);
}

function draw(){
    //background(255);
    let dibujar = new Composicion;
    dibujar.fondo();
    dibujar.lineaAmarilla();
    dibujar.lineaVede();
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
                circle(i + this.masMenosCinco() + medida / 2 , j + this.masMenosCinco(), diametro);
                square(i + this.masMenosCinco() + medida / 2 , j + this.masMenosCinco(), diametro);
                circle(i + this.masMenosCinco(), j + this.masMenosCinco() + medida / 2, diametro);
                square(i + this.masMenosCinco(), j + this.masMenosCinco() + medida / 2, diametro);
            }
        }
    }

    colorDeFondo() {
        let r = floor(random(220, 225));
        let g = floor(random(200, 210));
        let b = floor(random(190, 205));
        let alpha = floor(random(40, 70))
        return [r,g,b, alpha];
    }

    masMenosCinco () {
        return floor(random(-5, 6));
    }

    lineaAmarilla() {
        let  color = this.colorAmarillo();
        beginShape();
        fill(color[0], color[1], color[2], color[3]);
        noStroke();
        vertex(0, height); // 1
        vertex(0, random(height * 0.6, height)); // 2
        vertex(random(width * 0.75, width * 0.85), 0); // 3
        vertex(random(width * 0.85, width * 0.95), 0); // 4
        vertex(random(width * 0.2), height); // 5
        endShape();
    }

    colorAmarillo() {
        console.log('color');
        let r = floor(random(210, 230));
        let g = floor(random(180, 210));
        let b = floor(random(115, 130));
        let alpha = floor(random(190, 210));
        return [r, g, b, alpha];
    }

    lineaVede() {
        let  color = this.colorVerde();
        beginShape();
        fill(color[0], color[1], color[2], color[3]);
        noStroke();
        vertex(width, height); // 1
        vertex(width, random(height * 0.6, height)); // 2
        vertex(random(width * 0.3, width * 0.45), 0); // 3
        vertex(random(width * 0.2, width * 0.3), 0); // 4
        vertex(random(width * 0.9, width), height); // 5
        endShape();
    }

    colorVerde() {
        let r = floor(random(70, 100));
        let g = floor(random(140, 180));
        let b = floor(random(130, 150));
        let alpha = floor(random(190, 210));
        return [r, g, b, alpha];
    }
} 
