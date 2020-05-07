import coordinateUtil from '../index';

test1();
test2();
test3();
test4();

function test1() {
    const coordinates = getCoodinateSamples();
    let html = '<h1>Tests to check coordinates in WGS84</h1><hr><ul>';

    for (let coordinate of coordinates) {
        let result = coordinateUtil.hasValidProjection(coordinate, '4326');
        html += createListElement(coordinate, result);
    }

    addToDocument(html);
}

function test2() {
    const coordinates = getCoodinateSamples();
    let html = '<h1>Tests to check coordinates (>= 6 decimal places)</h1><hr><ul>';

    for (let coordinate of coordinates) {
        let result = coordinateUtil.hasValidAccuracy(coordinate, 6);
        html += createListElement(coordinate, result);
    }

    addToDocument(html);
}

function test3() {
    const coordinates = getCoodinateSamples();
    let html = '<h1>Tests to check coordinates (>= 6 decimal places) in WGS84</h1><hr><ul>';

    for (let coordinate of coordinates) {
        const result = coordinateUtil.hasValidAccuracy(coordinate, 6) &&
            coordinateUtil.hasValidProjection(coordinate, '4326');
        html += createListElement(coordinate, result);
    }

    addToDocument(html);
}

function test4() {
    let html = '<h1>Tests to check distances (m) between 2 coordinates in WGS84</h1><hr><ul>';

    const points = [
        [-4.773992331746113, 37.894851860089155],
        [-4.774045975926458, 37.89455553038567]
    ];

    const distance = coordinateUtil.getDistance(points[0], points[1]);
    let label = `<span class="label success">${distance} m</span>`;
    html += `<li><span style="line-height:40px">[${points[0]}] - [${points[1]}]</span>: ${label}</li>`;
    addToDocument(html);
}

function createListElement(coordinate, result) {
    let label = result ? '<span class="label success">Valid</span>' : '<span class="label danger">Not valid</span>';
    const html = `<li><span style="line-height:40px">[${coordinate}]</span>: ${label}</li>`;
    return html;
}

function addToDocument(html) {
    const container = document.createElement('div');
    container.innerHTML = html;
    document.body.appendChild(container);
}

function getCoodinateSamples() {
    const coordinate_3857 = [-531542.5251458, 4563415.5046983];
    const coordinate_25830 = [343905.9778012511, 4194713.1090175];
    const coordinate_wgs84 = [-4.775142321700772, 37.88657834791404];
    return [coordinate_3857, coordinate_25830, coordinate_wgs84, [1, 1],
        [0, 0],
        [],
        [1, ],
        [, 1]
    ];
}