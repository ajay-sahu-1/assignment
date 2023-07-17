document.getElementById('appointmentForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  const appointment = {
    name: name,
    date: date,
    time: time
  };

  axios.post('https://crudcrud.com/api/your-unique-identifier', appointment)
    .then(response => {
      console.log('Appointment stored successfully:', response.data);
      alert('Appointment booked successfully!');
      document.getElementById('appointmentForm').reset();
    })
    .catch(error => {
      console.error('Error storing appointment:', error);
      alert('Failed to book appointment. Please try again.');
    });
});
