<h1>BP Bot</h1>
<h4>*A Simple App to Track Blood Pressure*</h4>
<h3>**Description:**</h3>

This app is really just a simple CRUD app using Node.js and PostgreSQL for the backend and Angular 1.4 with Foundation for the Frontend. It was built primarily for demonstration purposes in order to showcase modularized Angular 1.4 architecture, the Foundation CSS framework, and client-side JSON consumption.

<h3>Installation</h3>

Installation is fairly straightforward:

1. Download or Clone this repository.
2. Install the required dependencies using <code>npm install</code>
3. Use <code>npm start</code> to run the program.

<h3>Dependencies</h3>

All dependencies are included in the relevant JSON files with the exception of the database. PostgreSQL was used during bp-bot development, but the application is db agnostic.

It's suggested that users either install Postgres before installing the application, however if another RDBMS is used, simply update the following files to reflect this:

* <code>database.js</code>
  * Update PG import: line 3
* <code>knexfile.js</code>
  * Update client info on lines 7 & 20

<h3>Issues</h3>

There are a few known quality-of-life issues that are still being worked on in active development, such as state navigation while the dashboard table is active as well as the addition of body metrics that will alter the warning thresholds of the gauges.

These will be patched out shortly.

If any other issues are encountered, please create a new issue on this repository and they will be dealt with directly.

<h3>Planned Features</h3>

* Social Auth
  * bp-bot will be complete with social authorization using Google+.
* Filtering
  * Filtering will be available for the readings table and will be reflected in the gauges
* Styling
  * Current styling is default Foundation. Future implementations will include custom styling
* Body metrics & User creation
  * These will be added to allow for differences between sexes and age to be taken into account for gauge thresholds
