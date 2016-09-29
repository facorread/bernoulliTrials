/* This file is part of bernoulliTrials: Simulation of choices for the prisoners dilemma using the Bernoulli distribution
Copyright (C) 2016 Fabio Correa fabio5@umd.edu

https://github.com/facorread/bernoulliTrials
https://gitlab.com/facorread/bernoulliTrials

bernoulliTrials is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

bernoulliTrials is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with bernoulliTrials.  If not, see <http://www.gnu.org/licenses/>.
*/

var enableCells = true;

function simulate(cell, n) {
	if(enableCells) {
		enableCells = false;
		if(Math.random() < document.forms["bernoulliForm"]["p" + n].value / 100)
			cell.innerHTML = "Cooperate";
		else
			cell.innerHTML = "Defect";
		cell.style.fontWeight = "bold";
		setTimeout(function() {
								 cell.style.fontWeight = "normal";
								 enableCells = true;
							 }, 2000)
	}
}
