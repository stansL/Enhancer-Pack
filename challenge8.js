class Establishment {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Establishment {
    constructor(name, buildYear, parkArea, numberOfTrees) {
        super(name, buildYear);
        this.parkArea = parkArea;
        this.numberOfTrees = numberOfTrees;
    }

    computeTreeDensity() {
        return this.numberOfTrees / this.parkArea;
    }

    computeAge() {
        return new Date().getFullYear() - this.buildYear;
    }

}


class Street extends Establishment {
    constructor(name, buildYear, streetLength, size = 3) {
        super(name, buildYear);
        this.streetLength = streetLength;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');

        //        
        //        switch (this.streetLength) {
        //            case 1: {
        //                return "tiny";
        //                break;
        //            }
        //            case 2: {
        //                return "small";
        //                break;
        //            }
        //            case 3:
        //            default: {
        //                return "normal";
        //                break;
        //            }
        //            case 4: {
        //                return "big";
        //                break;
        //            }
        //            case 5: {
        //                return "huge";
        //                break;
        //            }
        //
        //        }
        console.log(`${this.name} built on  ${this.buildYear} is a ${classification.get(size)} street. `);
    }
}

function computeAverage(elements) {
    let result = elements.reduce((sum, current) => sum + current, 0);
    return result / elements.length;
}

function computeAverageAge(parks) {
    const ages = parks.map(el => el.computeAge());
    return computeAverage(ages);
}


function parksWithMoreThan1000Trees(parks) {
    return parks.filter(park => park.numberOfTrees > 1000);
}


function computeStreetAv(streets) {
    const lengths = streets.map(el => el.streetLength);
    return computeAverage(lengths);
}
