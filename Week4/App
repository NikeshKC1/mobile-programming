import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default function App() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    if (title === '' || amount === '') {
      return;
    }

    const newExpense = {
      id: Date.now().toString(),
      title,
      amount: parseFloat(amount),
    };

    setExpenses([newExpense, ...expenses]);
    setTitle('');
    setAmount('');
  };

  const totalExpense = expenses.reduce(
    (total, item) => total + item.amount,
    0
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Daily Expense Tracker</Text>

      <View style={styles.dashboardCard}>
        <Text style={styles.dashboardTitle}>Dashboard</Text>
        <Text style={styles.totalText}>Total Expense</Text>
        <Text style={styles.amountText}>
          Rs. {totalExpense.toFixed(2)}
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Expense Title"
          style={styles.input}
          value={title}
          onChangeText={setTitle}
        />

        <TextInput
          placeholder="Amount"
          style={styles.input}
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />

        <TouchableOpacity style={styles.button} onPress={addExpense}>
          <Text style={styles.buttonText}>Add Expense</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.expenseItem}>
            <Text style={styles.expenseTitle}>{item.title}</Text>
            <Text style={styles.expenseAmount}>
              Rs. {item.amount}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    padding: 20,
  },

  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },

  dashboardCard: {
    backgroundColor: '#4e73df',
    padding: 25,
    borderRadius: 15,
    marginBottom: 20,
  },

  dashboardTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  totalText: {
    color: '#fff',
    fontSize: 18,
  },

  amountText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 5,
  },

  inputContainer: {
    marginBottom: 20,
  },

  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  button: {
    backgroundColor: '#1cc88a',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  expenseItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  expenseTitle: {
    fontSize: 16,
    fontWeight: '600',
  },

  expenseAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e74a3b',
  },
});