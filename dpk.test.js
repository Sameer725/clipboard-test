import { deterministicPartitionKey } from "./dpk.js";

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  const event = { partitionKey: "Test" };

  it(`Returns the partitionKey ("${event.partitionKey}") when event object with property partitionKey is provided`, () => {
    const partitionKey = deterministicPartitionKey(event);
    expect(partitionKey).toBe(event.partitionKey);
  });

  const event2 = { partition: "Test" };
  const output =
    "e446503344ef76e1861fdded0090caf87aa2917945b8eaa8b52b8873f07d0f840d5bf5de6fab78f1f23c5dd9970ee472b51526399ef1a57603365490a55cc385";

  it(`Returns hashed value for event ("${output}")  when event with no partitionKey property is provided.`, () => {
    const partitionKey = deterministicPartitionKey(event2);
    expect(partitionKey).toBe(output);
  });
});
