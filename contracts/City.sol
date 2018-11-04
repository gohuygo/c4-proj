pragma solidity 0.4.24;


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
        //Bond[] bonds;
        uint numberOfBonds;
        mapping(uint => Bond) bonds;
    }

    mapping (address => CityStruct ) private cities;

    function createCity(string _state, string _county, string _city, string _issuer) public {
        require(cities[msg.sender].owner == 0);
        cities[msg.sender] = CityStruct({
            owner:msg.sender, state:_state, county:_county,
            city:_city, issuer:_issuer, numberOfBonds:0
        });
    }

    function getCity() public view returns(
        address owner, string _state, string _county,
        string _city, string _issuer, uint _num) {
        require(cities[msg.sender].owner != 0);
        CityStruct storage city = cities[msg.sender];
        return (city.owner, city.state, city.county, city.city, city.issuer, city.numberOfBonds);
    }

    function isCity() public view returns (bool _isCity) {
        return (cities[msg.sender].owner != 0);
    }
}
