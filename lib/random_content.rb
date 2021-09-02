# frozen_string_literal: true

module RandomContent
  def quotes
    quotes = ['
From "As You Like It"
    by William Shakespeare (1623)

"All the world\'s a stage,
and all the men and women merely players;
They have their exits and their entrances;
And one man in his time plays many parts [..]"

- Jaques
',
'
"The day we stop exploring is the day we
commit ourselves to live in a stagnant
world, devoid of curiosity, empty of
dreams."

- Neil deGrasse Tyson
  Astrophysicist
',
'
"The freedom of Mankind does not lie in
the fact that we can do what we want, but
that we do not have to do that which we
do not want."

— Jean-Jacques Rousseau
  Philosopher
',
'
    CARSTEN BEHNERT

    Berlin, Germany
    ']

    monday_wisdom = '
 "Mondays are fine. It\'s your life
 that sucks."
    
 - Ricky Gervais
   Comedian'

    if Date.today.monday?
      quotes.insert(0, monday_wisdom)
    else
      quotes
    end
  end
end
