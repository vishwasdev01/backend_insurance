// controllers/taskController.js
import Task from '../models/taskModel.js';

export const createTask = async (req, res) => {
  try {
    const { age, income, dependents, risk } = req.body;

    if (!age || !income || !dependents || !risk) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    let recommendation = '';
    let explanation = '';

    // Logic for recommendation
    if (age < 40 && risk === "High") {
      recommendation = "Term Life – $500,000 for 20 years";
      explanation = "You are young with high risk tolerance, so a high-coverage term policy makes sense.";
    } else if (age < 40 && risk === "Low") {
      recommendation = "Whole Life – $300,000";
      explanation = "Low risk tolerance means more stable and long-term coverage.";
    } else if (age >= 40 && dependents > 0) {
      recommendation = "Term Life – $300,000 for 15 years";
      explanation = "Provides financial security for dependents during crucial years.";
    } else {
      recommendation = "Custom Plan – Contact Advisor";
      explanation = "Your profile requires a tailored insurance plan.";
    }
    
    // Note : Its should be extensible for ML integration later.

    // Save to DB (Supabase via Sequelize)
    const task = await Task.create({
      age,
      income,
      dependents,
      risk,
      recommendation,
      explanation,
    });

    res.status(201).json({ recommendation, explanation });
  } catch (error) {
    console.error('❌ Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
