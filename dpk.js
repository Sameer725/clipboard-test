import crypto from "crypto";

export const deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  if (!event) return TRIVIAL_PARTITION_KEY;

  let partitionKey = event.partitionKey;

  if (partitionKey === undefined) {
    const data = JSON.stringify(event);
    partitionKey = crypto.createHash("sha3-512").update(data).digest("hex");
  }

  if (partitionKey.length > MAX_PARTITION_KEY_LENGTH) {
    partitionKey = crypto
      .createHash("sha3-512")
      .update(partitionKey)
      .digest("hex");
  }

  return partitionKey;
};
