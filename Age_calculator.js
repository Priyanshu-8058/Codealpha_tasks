function calculateAge() {
      const day = parseInt(document.getElementById("day").value);
      const month = parseInt(document.getElementById("month").value);
      const year = parseInt(document.getElementById("year").value);

      const errorEl = document.getElementById("error");
      const resultEl = document.getElementById("result");

      errorEl.textContent = "";
      resultEl.textContent = "";

      if (isNaN(day) || isNaN(month) || isNaN(year)) {
        errorEl.textContent = "Please enter valid day, month, and year.";
        return;
      }

      const dob = new Date(year, month - 1, day);
      const today = new Date();

      if (dob > today) {
        errorEl.textContent = "Date of Birth cannot be in the future.";
        return;
      }

      let ageYears = today.getFullYear() - dob.getFullYear();
      let ageMonths = today.getMonth() - dob.getMonth();
      let ageDays = today.getDate() - dob.getDate();

      if (ageDays < 0) {
        ageMonths--;
        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        ageDays += previousMonth.getDate();
      }

      if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
      }

      resultEl.textContent = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
    }
