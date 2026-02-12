
function printRecord(record) {
 console.log(`${record.name} (${record.id}): ${record.paid ? 'Paid' : 'Not Paid'}`);
}

function printRecords(recordIds) {
	// TODO
    var records = recordIds.map(studentId => studentRecords.find(student => student.id == studentId));
    records.sort((record1, record2) => {
		if (record1.name > record2.name) {
			return 1
		} else if (record1.name < record2.name) {
			return -1
		} else {
			return 0
		}
	});
    records.forEach(printRecord);
}

function paidStudentsToEnroll() {
	// TODO
    const paidStudentsEnrollRecord = studentRecords.filter(student=> (student.paid && !currentEnrollment.includes(student.id)))

    const collectIds = paidStudentsEnrollRecord.map(record => record.id) 

    return [...currentEnrollment, ...collectIds];
    
}

function remindUnpaid(recordIds) {
	// TODO
    const unpaidStudent = studentRecords.filter(student => (!student.paid && recordIds.includes(student.id)))

    const collectIds = unpaidStudent.map(student => student.id)

    printRecords(collectIds);
}

var currentEnrollment = [ 410, 105, 664, 375 ];

var studentRecords = [
    { id: 313, name: "Frank", paid: true, },
    { id: 410, name: "Suzy", paid: true, },
    { id: 709, name: "Brian", paid: false, },
    { id: 105, name: "Henry", paid: false, },
    { id: 502, name: "Mary", paid: true, },
    { id: 664, name: "Bob", paid: false, },
    { id: 250, name: "Peter", paid: true, },
    { id: 375, name: "Sarah", paid: true, },
    { id: 867, name: "Greg", paid: false, },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/