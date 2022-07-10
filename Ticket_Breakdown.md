# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

TICKET 1: Update the Agent table to have custom id column.

- Time estimation: 1hr
- Acceptance criteria:
  - column custom_id should be there in agent table
  - the relation of the agent table with other tables should not be broken
- Implementation:
  - add a column custom_id in the agent table.

TICKET 2: Update getShiftByFacility Function.

- Time estimation: 1hr
- Acceptance criteria:
  - the agent metadata should contain the agent custom_id
- Implementation:
  - include the custom_id in the data return when querying for the agent metadata

TICKET 3: Update generateReport Function.

- Time estimation: 1hr
- Acceptance criteria:
  - the agent custom_id should be displayed in the generated report.
- Implementation:
  - include the agent custom_id while generating the report
