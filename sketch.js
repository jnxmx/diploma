var pdf;
var myFont;
let cnv;
let input;

function setup() {
    cnv = createCanvas(210, 297, SVG);
    pdf = createPDF();
    pdf.beginRecord();
  myFont = loadFont('fonts/Faune-TextRegular.otf');
  cnv.mousePressed(readyToPrint);
    input = createInput();
  input.position(210, 105);

}
function greet() {
  name = input.value();
  input.value('');
}
function draw() {

  rectMode(CORNER);
  textAlign(LEFT, TOP);
    background(255);
    fill('#ED225D');
  //textFont(myFont);
    textSize(2.5);
    //textAlign(CENTER);
    let t1 = "Vu le code de l'éducation, notamment ses articles L. 759-1, L. 759-2, D. 612-32-2, D. 613-1 à D. 613-12 et D. 759-5 à D. 759-7; Vu l'arrêté du 13 juillet 2018 fixant les modalités d'accréditation des établissements publics nationaux d'enseignement supérieur de la création artistique et des établissements d'enseignement supérieur de la création artistique dans le domaine du spectacle vivant et des arts plastiques en vue de la délivrance des diplômes conférant un grade universitaire defini à l'article L613-1 du code de l'éducation,\n\nLa Directrice de l'Ecole nationale supérieure d'art et de design de Nancy";
  text(t1, 140, 30, 60, 80);
  textSize(4);
  let t2 = "Certifie que";
  text(t2, 70, 110, 100, 80);
  textSize(7);
  let t3 = "Madame CALVET Maëva";
  text(input.value(), 70, 116, 100, 80);
  textSize(4);
  let t4 = "né(e) le 20 janvier 2000 a Gonesse (95)\na satisfait, dans les formes réglementaires,\naux epreuves en vue d'obtenir :";
  text(t4, 70, 124, 100, 60);
  textSize(7);
  let t5 = "Le diplôme national d'art conférant grade de licence";
  text(t5, 70, 144, 100, 60);
  
  textSize(3);
  let t6="Le diplôme national d'art conférant grade de licence à la session d'examen de :\nJUIN 2022\noption:\nCommunication\nFait à Nancy le 28 juin 2022\nMme. Christelle Kirchstetter\nDirectrice de l'ENSAD Nancy";
  text(t6, 70, 210, 60, 60);
let t7 = "\n\n\n\n\nsignature de la directrice et tampon de l'école"
text(t7, 140, 210, 30, 60);
  let t8 = "Ce diplôme est inscrit de droit au niveau 2 de la certification professionnelle sous l'intitulé « Créateur-concepteur d'expressions plastiques. ontion art desion communication » et au niveau 6\ndu cadre europeen des centrications (ose).\n2022/06/08/EP N° d'ordre 16"
  textSize(2.5);
  text(t8, 70, 255, 100, 60);
    // if (frameCount == 3) {
    //     pdf.endRecord();
    // }
    // if (frameCount == 7) {
    //     pdf.beginRecord();
    // }

    // pdf.nextPage();
}

function readyToPrint() {
          noLoop();
        pdf.save();
}