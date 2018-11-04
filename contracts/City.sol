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

    function createBond(
        string name,
        string startDate,
        string orderDeadline,
        uint   totalAmountFiat,
        uint   totalTokensSupply,
        string tokenSymbol,
        address bondContractERC20Address,
        string creditRating,
        uint   couponRate,
        uint   faceValue,
        uint   marketValue,
        uint   tTMInMonths,
        string status,
        string typeOfBond
    ) public {

        require(cities[msg.sender].owner != 0);

        Bond memory bond;
        bond.name = name;
        bond.startDate = startDate;
        bond.orderDeadline = orderDeadline;
        bond.totalAmountFiat = totalAmountFiat;
        bond.totalTokensSupply = totalTokensSupply;
        bond.tokenSymbol = tokenSymbol;
        bond.bondContractERC20Address = bondContractERC20Address;
        bond.creditRating = creditRating;
        bond.couponRate = couponRate;
        bond.faceValue = faceValue;
        bond.marketValue = marketValue;
        bond.tTMInMonths = tTMInMonths;
        bond.status = status;
        bond.typeOfBond = typeOfBond;

        cities[msg.sender].bonds[cities[msg.sender].numberOfBonds] = bond;
        cities[msg.sender].numberOfBonds++;
    }

    function getNumberOfBonds() public view returns (uint _num) {
        return cities[msg.sender].numberOfBonds;
    }

    function getBond() public view returns (string name, address _addr) {
        return (cities[msg.sender].bonds[0].name, cities[msg.sender].bonds[0].bondContractERC20Address);
    }

}
