export function fordWords(value) {
    value = value.trim().replace(/\s+/g, ' ')
    value = value.split(" ")


    if (!value[0] == '') {

        for(let i=0 ; i<value.length; i++){
            if(value[i].length <3 || value[i].length > 5){
                this.nameError = "Each word must be between 3 and 5 characters"
                return false
            }
        }

        if (value[0].search(/a|o|u|m|p|A|O|U|M|P/) != -1) {
            this.nameError = "1st word cannot have “a, o, u, m, p”"
            return false
        }

        if (!value[1] == '') {
            if (!/^([a,s,d,f,g,h,j,k,l,o,p,u,y,t,e,m]*)+$/.test(value[1])) {
                this.nameError = "2nd word can only use these letters “asdfghjklopuytem”"
                return false

            }
        }

        if (!value[2] == '') {
            if (value[2].search(/a|o|e|u|A|O|E|U/) != -1 || value[2].search(/1|2|3|4|5|6|7|8|9|0/) == -1) {
                this.nameError = "3rd word cannot have “a,e,o,u” and should include at least 1 number"
                return false
    
            }
        }
        
        if (!value[3] == '') {
            if (value[3].search(/t/) == -1) {
                this.nameError = "4th word should have at least 1 letter “t” lowercase."
                return false
    
            }
        }
        

        if (value.length < 4) {
            this.nameError = "The name must be composed of 4 words”"
            return false
        }
        return true
    }
    this.nameError = "Name is required!"
    return false

}

export function ageBetween(value) {
    if( (value > 25 && value < 30) && this.relocation){
        this.relocationError = "When the age is between 26 and 29, relocation can not be true"
        return false
    }
    return true
}

export function notGmail(value = "") {
    return !value.includes("gmail");
}

export function isEmailAvailable(value) {
    if (value === "") return true;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value.length > 10);
        }, 500);
    });
}

