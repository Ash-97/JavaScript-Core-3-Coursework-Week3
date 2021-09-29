let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function printReceipt(order) {
  //Just using \t here to replicate the expected output
  console.log(`QTY\tITEM\t\t\tTOTAL`);
  let totalAmount = 0;
  order.forEach(({ itemName, quantity, unitPrice }) => {
    const totalPerUnit = unitPrice * quantity;
    console.log(
      `${("" + quantity).padEnd(8, " ")}${itemName.padEnd(
        24,
        " "
      )}${totalPerUnit.toFixed(2)}`
    );
    totalAmount += totalPerUnit;
  });
  console.log(`\nTotal: ${totalAmount}`);
}

printReceipt(order);
