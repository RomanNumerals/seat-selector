const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.sold)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieOption = document.getElementById('movie');

let ticketPrice = +movieOption.value;

// Updates total seat count and total price
function updateSelectedSeatCountAndPrice() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// Movie selection event
movieOption.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  updateSelectedSeatCountAndPrice();
});

// Seat selection event upon click
container.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('sold')
  ) {
    e.target.classList.toggle('selected');

    updateSelectedSeatCountAndPrice();
  }
});
