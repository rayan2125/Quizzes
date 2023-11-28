import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const Login = ({ navigation }) => {
  const [showButton, setShowButton] = useState(false)
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const [options, setOptions] = useState([])
  const [feedback, setFeedback] = useState(null);

  const [score, setScore] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null);

  const [correctAnswer, setCorrectAnswer] = useState(null);
 console.log("correct",correctAnswer)
  const getQuiz = async () => {
    setIsLoading(true);
    const url = 'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
    const res = await fetch(url);
    const data = await res.json();
    
    const decodedCorrectAnswer = decodeURIComponent(data.results[0].correct_answer);
    setCorrectAnswer(decodedCorrectAnswer);
  
    setQuestions(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]));
    setIsLoading(false);
  };
  

  useEffect(() => {
    getQuiz();
  }, []);

  const handleNextPress = () => {
    setQues(ques + 1)
    setOptions(generateOptionsAndShuffle(questions[ques + 1]))
  }

  const generateOptionsAndShuffle = (_question) => {
    const options = [..._question.incorrect_answers]
  
    const correctAnswer = decodeURIComponent(_question.correct_answer);
   
    options.push(correctAnswer);
  
    
    shuffleArray(options);
  
    return options;
  }
  


  const handleSelectedOption = (selectedItem) => {
    const decodedSelectedItem = decodeURIComponent(selectedItem);


    setSelectedOption(decodedSelectedItem);

    if (decodedSelectedItem === correctAnswer) {
      setFeedback('right');
    } else {
      setFeedback('wrong');
    }

    setShowButton(true);
  };



  const handleSubmit = () => {
    if (selectedOption === questions[ques].correct_answer) {
      setScore(score + 10);
    }
  
    if (ques !== 9) {
      setSelectedOption(null); 
      setFeedback(null); 
      setShowButton(false); 
  
      
      setQues(ques + 1);

  
  if (ques + 1 < questions.length) {
    setCorrectAnswer(decodeURIComponent(questions[ques + 1].correct_answer));
    setOptions(generateOptionsAndShuffle(questions[ques + 1]));
  } else {
    handleShowResult();
  }
    } else {
      handleShowResult();
    }
  };
  
  const handleShowResult = () => {
    navigation.navigate('Result', {
      score: score
    })
  }

  return (
    <View style={styles.container}>
      {isLoading ? <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Text style={{ fontSize: 32, fontWeight: '700' }}>LOADING...</Text>
      </View> : questions && (
        <View style={styles.parent}>
          <View style={styles.top}>
            <Text style={styles.question}>Q. {decodeURIComponent(questions[ques].question)}</Text>
          </View>
          <View style={styles.options}>
            {
              options.map((item, index) => {

                return (

                  <TouchableOpacity key={index}

                    style={{
                      backgroundColor:
                        selectedOption === item
                          ? feedback === 'right'
                            ? '#C8FF85'
                            : feedback === 'wrong'
                              ? '#FFC2C2'
                              : 'transparent'
                          : 'transparent',
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingVertical: 12,
                      paddingHorizontal: 12,
                      borderRadius: 12,
                      marginVertical: 6,

                    }}
                    onPress={() => handleSelectedOption(item)}
                    disabled={showButton}
                    >
                    <Text style={styles.option}>{decodeURIComponent(item)}</Text>
                    <Text  >{selectedOption === item &&
                      (feedback === 'right' ? '✔️' : feedback === 'wrong' ? '❌' : '')}</Text>
                  </TouchableOpacity>
                )
              })
            }

          </View>
          <View style={styles.bottom}>

            {
              showButton &&
              <TouchableOpacity style={{
                backgroundColor: 'green',
                width: '80%', marginBottom: 12,
                borderRadius: 16,
                alignItems: "center",
                paddingVertical: 16,
              }}
                onPress={handleSubmit}
              >
                <Text style={styles.buttonText} >Submit</Text>
              </TouchableOpacity>
            }

          </View>
        </View>
      )}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#1A759F',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  question: {
    fontSize: 28,
  },
  option: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
  optionButtom: {
    borderColor: "white",
    borderWidth: 1,
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: '#fb8500',
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  parent: {
    height: '100%',
  },
});