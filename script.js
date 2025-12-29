const indices = {
    casa1: 2
};

const totalImagenes = {
    casa1: 2
};
indices.casa2 = 1

totalImagenes.casa2 = 5



function cambiarImagen(direccion, casa) {
    indices[casa] += direccion;

    if (indices[casa] < 1) {
        indices[casa] = totalImagenes[casa];
    }

    if (indices[casa] > totalImagenes[casa]) {
        indices[casa] = 1;
    }

    document.getElementById(casa + "-img").src =
        `img/${casa}/${indices[casa]}.jpg`;
}
