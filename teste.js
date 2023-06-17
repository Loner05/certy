

let meno = {
    userLogin: '',
    testQuestions: {
      question: {
        total: 6,
        categories: [
          {
            id: 'd8598403-e4b3-4eac-9eba-ec6c00371ec8',
            question: 'debes tomar agua?',
            correct_answer: 'true',
            createdAt: '2023-03-09T16:08:58.582Z',
            updatedAt: '2023-03-09T16:08:58.594Z',
            TestId: '9e9db805-16c8-472f-af72-54e54ea2d9c2'
          }
        ]
      },
      answers: [
        {
          id: '3f380460-4fb3-474f-bd5f-424c87cb1a5e',
          answer: 'toma mucha agua',
          createdAt: '2023-04-18T00:01:51.797Z',
          updatedAt: '2023-04-18T00:01:51.797Z',
          QuestionId: 'd8598403-e4b3-4eac-9eba-ec6c00371ec8',
          UserAnswerId: null
        },
        {
          id: '82775abb-0d94-4fd7-affc-b0605e8dc826',
          answer: 'toma poca agua',
          createdAt: '2023-04-18T00:02:02.535Z',
          updatedAt: '2023-04-18T00:02:02.535Z',
          QuestionId: 'd8598403-e4b3-4eac-9ebaqu-ec6c00371ec8',
          UserAnswerId: null
        },
        {
          id: '1e2c5393-0a5f-4f7f-8675-262f544b8458',
          answer: 'toma dos litros de agua',
          createdAt: '2023-04-18T00:02:11.578Z',
          updatedAt: '2023-04-18T00:02:11.578Z',
          QuestionId: 'd8598403-e4b3-4eac-9eba-ec6c00371ec8',
          UserAnswerId: null
        }
      ]
    },
    questionAnswers: [],
    page: 2,
    error: null
  }



  console.log(meno.testQuestions.question.categories[0].question)