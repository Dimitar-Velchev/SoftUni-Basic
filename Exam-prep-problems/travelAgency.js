function travelAgency(arg1, arg2, arg3, arg4) {
    let destination = arg1;
    let package = arg2;
    let vip = arg3;
    let numDays = Number(arg4);
    let price = 0;

    if (destination === "Bansko" || destination === "Borovets") {
        if (package === "withEquipment") {
            price = 100
        } else if (package === "noEquipment") {
            price = 80
        }
    }

    if (destination === "Varna" || destination === "Burgas") {
        if (package === "withBreakfast") {
            price = 130
        } else if (package === "noBreakfast") {
            price = 100
        }
    }

    let totalPrice = price * numDays

    if (vip === "yes") {
        switch (destination) {
            case "Bansko":
            case "Borovets":
                if (package === "withEquipment") {
                    totalPrice *= 0.90
                } else if (package === "noEquipment") {
                    totalPrice *= 0.95
                }
                break;
            case "Varna":
            case "Burgas":
                if (package === "withBreakfast") {
                    totalPrice *= 0.88
                } else if (package === "noBreakfast") {
                    totalPrice *= 0.93
                }
                break;
        }

    }

    if (numDays > 7) {
        totalPrice = totalPrice - price
    }

    if (numDays < 1) {
        console.log(`Days must be positive number!`)
    }else if ((destination === "Bansko" || destination === "Borovets" || destination ===
        "Varna" || destination === "Burgas") && (package === "noEquipment" || package === "withEquipment" ||
            package === "noBreakfast" || package === "withBreakfast")) {
                console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`)
       // console.log(`Invalid input!`)
    } else {
        console.log(`Invalid input!`)
       // console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`)
    }
}
//travelAgency("Bansko", "withEquipment", "no", 2)
//travelAgency("Borovets", "noEquipment", "yes" ,"6")
//travelAgency("Bansko", "Breakfast", "no", 3)
travelAgency("Burgas","noBreakfast", "no", 8)