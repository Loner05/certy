

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



  let data1 = [
    {
      "id": "02006522-824d-4c88-8e39-2a8f23d12df3",
      "correct": true,
      "createdAt": "2023-12-28T03:10:02.810Z",
      "updatedAt": "2023-12-28T03:10:02.810Z",
      "UserId": "a1bdbea7-c77e-44a6-b5b8-f90309288df8",
      "QuestionId": "250ae560-711d-47c2-a837-1560cb523631",
      "AnswerId": null
    },
    {
      "id": "e521aed3-a9f8-47d5-9977-f8a5db26bcce",
      "correct": true,
      "createdAt": "2023-12-28T03:10:02.814Z",
      "updatedAt": "2023-12-28T03:10:02.814Z",
      "UserId": "a1bdbea7-c77e-44a6-b5b8-f90309288df8",
      "QuestionId": "74418e26-4b8c-41ef-9ffc-6b74fb1c517b",
      "AnswerId": null
    },
    {
      "id": "74c36648-8042-4d1f-9215-1ab95ca5af8e",
      "correct": true,
      "createdAt": "2023-12-28T03:10:02.816Z",
      "updatedAt": "2023-12-28T03:10:02.816Z",
      "UserId": "a1bdbea7-c77e-44a6-b5b8-f90309288df8",
      "QuestionId": "507fa071-ada2-45b0-a545-b988f9c7151a",
      "AnswerId": null
    },
    {
      "id": "f14e44c5-d312-49da-80e8-e4e1bba15ff6",
      "correct": true,
      "createdAt": "2023-12-28T03:10:02.819Z",
      "updatedAt": "2023-12-28T03:10:02.819Z",
      "UserId": "a1bdbea7-c77e-44a6-b5b8-f90309288df8",
      "QuestionId": "d8598403-e4b3-4eac-9eba-ec6c00371ec8",
      "AnswerId": null
    },
    {
      "id": "25c874a5-93d5-4dde-9dbf-6d7a566f233b",
      "correct": true,
      "createdAt": "2023-12-28T03:10:02.820Z",
      "updatedAt": "2023-12-28T03:10:02.820Z",
      "UserId": "a1bdbea7-c77e-44a6-b5b8-f90309288df8",
      "QuestionId": "501cfa11-3616-4576-9ef0-58ce3288bda7",
      "AnswerId": null
    },
    {
      "id": "8e4d66b8-ca06-453f-9b05-76e825a59c3e",
      "correct": true,
      "createdAt": "2023-12-28T03:10:02.822Z",
      "updatedAt": "2023-12-28T03:10:02.822Z",
      "UserId": "a1bdbea7-c77e-44a6-b5b8-f90309288df8",
      "QuestionId": "d1f6c409-83c2-4bef-9f3d-02c6e0f9599a",
      "AnswerId": null
    }
  ]