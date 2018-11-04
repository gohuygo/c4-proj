pragma solidity ^0.4.24;
//pragma experimental ABIEncoderV2;

contract City {

    struct Bond {
        string name;
        string startDate;
        string orderDeadline;
        uint   totalAmountFiat;
        uint   totalTokensSupply;
        string tokenSymbol;
        address bondContractERC20Address;
        string creditRating;
        uint   couponRate;
        uint   faceValue;
        uint   marketValue;
        uint   tTMInMonths;
        string status;
        string typeOfBond;
    }

    struct CityStruct {
        address owner;
        string state;
        string county;
        string city;
        string issuer;
        Bond[] bonds;
        //uint numberOfBonds;
        //mapping(uint => Bond) bonds;
    }

    mapping (address => CityStruct ) private cities;

    mapping (address => address[] ) private investorToBonds;

    address[] cityAddresses;

    function createCity(string _state, string _county, string _city, string _issuer) public {
        require(cities[msg.sender].owner == 0);
        CityStruct storage c1;
        c1.owner = msg.sender;
        c1.state = _state;
        c1.county = _county;
        c1.city = _city;
        c1.issuer = _issuer;
        cities[msg.sender] = c1;
        cityAddresses.push(msg.sender);
        //cities[msg.sender] = CityStruct({
        //    owner:msg.sender, state:_state, county:_county,
        //    city:_city, issuer:_issuer, numberOfBonds:0
        //});
    }


    function getCity() public view returns(
        address owner, string _state, string _county,
        string _city, string _issuer, uint _num) {
        require(cities[msg.sender].owner != 0);
        CityStruct storage city = cities[msg.sender];
        return (city.owner, city.state, city.county, city.city, city.issuer, city.bonds.length);
    }

    function isCity() public view returns (bool _isCity) {
        return (cities[msg.sender].owner != 0);
    }

    function createBond(
        string name,
    //    string startDate,
  //      string orderDeadline,
  //      uint   totalAmountFiat,
        uint   totalTokensSupply,
        string tokenSymbol,
  //      string creditRating,
  //      uint   couponRate,
  //      uint   faceValue,
  //      uint   marketValue,
  //      uint   tTMInMonths,
        string status
  //      string typeOfBond
    ) public {

        require(cities[msg.sender].owner != 0);

        Bond memory bond;
        bond.name = name;
      //  bond.startDate = startDate;
      //  bond.orderDeadline = orderDeadline;
      //  bond.totalAmountFiat = totalAmountFiat;
        bond.totalTokensSupply = totalTokensSupply;
        // bond.tokenSymbol = tokenSymbol;
        bond.bondContractERC20Address = msg.sender;
      //  bond.creditRating = creditRating;
      //  bond.couponRate = couponRate;
      //  bond.faceValue = faceValue;
      //  bond.marketValue = marketValue;
      //  bond.tTMInMonths = tTMInMonths;
        bond.status = status;
      //  bond.typeOfBond = typeOfBond;

        cities[msg.sender].bonds.push(bond);
       // cities[msg.sender].numberOfBonds++;
    }



    function getBond(uint bondIndex) public view returns(
        string name,
        uint   totalTokensSupply,
        string tokenSymbol,
        string status
        ) {
            if(isCity()){
                Bond memory bond = cities[msg.sender].bonds[bondIndex-1];
                return (bond.name, bond.totalTokensSupply, bond.tokenSymbol, bond.status);
            } else {
                address bondAddress = investorToBonds[msg.sender][bondIndex-1];
                return getBondByAddress(bondAddress);
            }
    }

    function getBondByAddress(address _addr) public view returns (
        string name,
        uint   totalTokensSupply,
        string tokenSymbol,
        string status
        ) {
           Bond memory b1;
           for(uint i=0; i<cityAddresses.length; i++ ){
               CityStruct memory city = cities[cityAddresses[i]];
               for(uint j=0; j<city.bonds.length;j++){
                   Bond memory bond = city.bonds[j];
                   if(bond.bondContractERC20Address == _addr ) {
                        b1 = bond;
                        return (b1.name, b1.totalTokensSupply, b1.tokenSymbol, b1.status);
                   }
               }
           }
           return (b1.name, b1.totalTokensSupply, b1.tokenSymbol, b1.status);
        }

    function getNumberOfBonds() public view returns (uint _num) {
        if( isCity() ) {
            return cities[msg.sender].bonds.length;
        } else {
            return investorToBonds[msg.sender].length;
        }
    }

}
