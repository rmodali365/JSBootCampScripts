let myRestaurant = {
    name: 'ASB',
    guessCapacity: 75,
    guessCount: 0,
    checkAvailability: function(partySize){
        let availability = this.guessCapacity-this.guessCount
        if(availability<partySize){
            return false
        }
        else{
            return true
        }
    },
    seatParty: function(numberOfGuests){
        if(this.checkAvailability(numberOfGuests)){
            this.guessCount+=numberOfGuests
        }
        else{
            console.log("Not enough capacity")
        }
    },
    removeParty: function(numberOfGuests){
        this.guessCount-=numberOfGuests

    }

}
console.log(myRestaurant)
myRestaurant.seatParty(76)
myRestaurant.seatParty(50)
console.log(myRestaurant)
myRestaurant.removeParty(25)
console.log(myRestaurant)
myRestaurant.seatParty(49)

console.log(myRestaurant.checkAvailability(5))
