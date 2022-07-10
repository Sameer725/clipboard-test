# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

1. For no given input the trivial key is returned, for this condition we don't need to check further and directly terminate the function here i.e return from here.Doing this the reader can easily understand that with no event we always get the trivial key.

2. If event is provided we can directly assign the partitionKey property from event to our local partitionKey variable and check if the the partitionKey is a falsely value if it is, we stringify the event and create hash and assign it to the partition value. Reader can easily understand that if event doesn't contain the partitionKey property/ event is not of type object, we simply hash the event itself go for the further check.
