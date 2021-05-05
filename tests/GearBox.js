let gearBoxInterval;
function GearBox() {
    this.gearBoxValue = 'N';
    console.log('gear')
}

GearBox.prototype = {
    start: function (gearBox) {
        this.gearBoxValue = '1';
        for (const el of gearBox) {
            el.innerHTML = this.gearBoxValue
        }
        // processElements(gearBox, (item) => {
        //     item.innerHTML = gearBoxValue

        // })

        // setTimeout(engineCrush, 5000);
        const self = this.increaseGearBoxValue.bind(this, gearBox);
        gearBoxInterval = setInterval(self, 1000);
    }, 

    increaseGearBoxValue: function(gearBox) {
        for (const el of gearBox) {
            if (this.gearBoxValue < 5) {
                this.gearBoxValue++;
                el.innerHTML = this.gearBoxValue;
            }
            if (this.gearBoxValue == 5) {
                window.clearInterval(gearBoxInterval);
            } 
        }
    }
}