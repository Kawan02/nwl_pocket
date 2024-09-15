interface CreateGoalRequest {
  title: string
  desiredWeekLyFrequency: number
}

export async function createGoal({
  title,
  desiredWeekLyFrequency,
}: CreateGoalRequest) {
  await fetch('http://localhost:3333/goals', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      desiredWeekLyFrequency,
    }),
  })
}
