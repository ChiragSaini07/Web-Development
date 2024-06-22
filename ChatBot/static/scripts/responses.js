function getBotResponse(input) {

    if (input.toLowerCase() == "hello"){
        return "Hello there!";
    }
    else if (input.toLowerCase() == "hi"){
            return "Hello there!";
    }
     else if (input.toLowerCase().indexOf("bye") >= 0) {
        return "Talk to you later!";
    } 

    else if(input.toLowerCase().indexOf("hostel") >= 0)
    {
        return " Separate hostels are provided for girls and boys at GEHU. Students are provided with adequate facilities to make them feel at home. Their stay in the hostel enables them to imbibe a different lifestyle and involve themselves in activities including yoga, meditation, sports, music etc., suiting individuals taste and preferences. The hostels have the capacity to comfortably accommodate over 1500 students. Every effort is made that the hostellers get a homely ambience by providing them a home away from home.";
    }

    else if(input.toLowerCase().indexOf("average") >= 0)
    {
        return "Rs. 5.38 Lacks";
    }
    
    else if(input.toLowerCase().indexOf("high") >= 0 )
    {
        return "Rs. 54.80 Lacks";
    }
    
    else if(input.toLowerCase().indexOf("transport") >= 0)
    {
        return "College buses pickup and drop day-scholars from specified locations in Dehradun city and en-route, on payment of a nominal fee. City bus facility is also available from college gate to city from morning 7.00 a.m. to evening 9.00 p.m. at frequent intervals of 15 minutes.";
    }
    
    else if(input.toLowerCase().indexOf("scholarship") >= 0)
    {
        return "Graphic Era awards merit or academic scholarships to those students who do exceptionally well in academic and educational frontiers. These are directed towards acknowledging exceptional students for their achievements in the fields of academics and educational prowess.";
    }

    else if(input.toLowerCase().indexOf("loan") >= 0 )
    {
        return "We are pleased to inform you that Graphic Era Hill University has been approved by SBI for the facility of Education loan to our students. The maximum eligibility of loan amount is Rs.10 lacs.";
    }

    else if(input.toLowerCase().indexOf("old") >= 0 )
    {
        return "Graphic Era was founded in 1993 by Dr. Kamal Ghanshala and started with undergraduate programs in core engineering and allied sciences. It is situated in Dehradun, Uttarakhand.";
    }
    
    else if(input.toLowerCase().indexOf("engine") >= 0 )
    {
        return "Computer Science and Engineering, Civil Engineering, Biotechnology, Electronics and Communication Engineering, Electrical Engineering, Mechanical Engineering, Petroleum Engineering, Allied Sciences.";
    }

    else if(input.toLowerCase().indexOf("courses") >= 0 )
    {
        return "B.Tech, MBA, BBA, BCA, BHM, MHM";
    }

    else {
        return "Try asking something else!";
    }
}