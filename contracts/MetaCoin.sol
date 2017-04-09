pragma solidity ^0.4.4;

// This is just a simple example of a coin-like contract.
// It is not standards compatible and cannot be expected to talk to other
// coin/token contracts. If you want to create a standards-compliant
// token, see: https://github.com/ConsenSys/Tokens. Cheers!

contract MetaCoin {

	struct obligation {
	address user;
	uint owed;
	uint paid;
	bool verified;
	bool exists;
	}

	event newAgreement (
		bool success,
		uint lastAdded
	);

	struct agreement {
	address receiver;
	mapping (address => obligation) obligations;
	address[] debtors;
	bool exists;
	}


	uint lastContract;
	address owner;

	mapping (uint => agreement) agreements;

	function MetaCoin(){
		owner = msg.sender;
		lastContract = 1;
	}

	function isFulfilled(uint agreementId) private constant returns (bool) {
		if (agreements[agreementId].obligations[msg.sender].exists){
			obligation o =  agreements[agreementId].obligations[msg.sender];
			return (o.paid >= o.owed);
		}
	}

	//returns id of lastContract inserted
	function getLastAgreement() constant returns (uint){
		return lastContract;
	}

	//get all values related to an agreeme
	//Return Format: Exists, Reciever, debtors[], amountOwedPerDebtor[], amountPaidPerDebtor[], verifiedPaidPerDebtor[]
	function getAgreement(uint agreementId) constant returns (bool, address, address[], uint[], uint[], bool[]){
		agreement a = agreements[1];
		uint[] memory owed;
		uint[] memory paid;
		bool[] memory verified;
		if (agreements[agreementId].exists){
			owed = new uint[](a.debtors.length);
			paid = new uint[](a.debtors.length);
			verified = new bool[](a.debtors.length);
			for (uint i = 0; i < a.debtors.length; i++){
				a = agreements[agreementId];
				address debtor = a.debtors[i];
				obligation o = a.obligations[debtor];
				owed[i] = o.owed;
				paid[i] = o.paid;
				verified[i] = o.verified;
			}
			return (true, a.receiver, a.debtors, owed, paid, verified);
		}
		return (false, a.receiver, a.debtors, owed,paid,verified);
	}

//checks if a user is part of an agreement and if they are pays their share
//returns true if the command was successful, true if the obligation has been fufilledthen the total amount they've paid towards the obligation
	function payObligation(uint agreementId, uint amount) returns (bool, bool, uint) {
		//if user is in that contract
		obligation sender = agreements[agreementId].obligations[msg.sender];
		if (sender.exists){
			sender.paid += amount;
			return (true, isFulfilled(agreementId), sender.paid);
		}
		return (false, false, 0);
	}

//returns true if a user is part of an agreement
	function inAgreement(uint agreementId) constant returns (bool) {
		return agreements[agreementId].obligations[msg.sender].exists;
	}

//marks that a debtor has fufilled their obligation
//returns whether or not the operation was successful
	function verifyPaid(uint agreementId, address debtorId) returns (bool){
		if (agreements[agreementId].receiver == msg.sender){
			agreements[agreementId].obligations[debtorId].verified = true;
		}
		return false;
	}

//returns whether the operation successful, and the id of the inserted agreement
	function addAgreement(address receiver, address[] senders, uint[] amounts) returns (bool, uint) {
		agreements[lastContract].exists = true;
		agreements[lastContract].receiver = receiver;
		for (var i = 0; i < senders.length; i++){
			address sender = senders[i];
			uint amount = amounts[i];
			agreements[lastContract].debtors.push(sender);
			agreements[lastContract].obligations[sender].exists = true;
			agreements[lastContract].obligations[sender].user = sender;
			agreements[lastContract].obligations[sender].paid = 0;
			agreements[lastContract].obligations[sender].verified = false;
			agreements[lastContract].obligations[sender].owed = amount;
		}
		lastContract = lastContract + 1;
		newAgreement(true, lastContract - 1);
		return (true, lastContract - 1);

	}

	mapping (address => uint) balances;

	event Transfer(address indexed _from, address indexed _to, uint256 _value);

	function getBalance(address addr) returns(uint) {
		return balances[addr];
	}
}
