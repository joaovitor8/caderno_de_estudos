#Importações
from sqlalchemy.orm import declarative_base, relationship, Session
from sqlalchemy import Column, Integer, String, ForeignKey, create_engine, inspect

#Construindo a tabela
Base = declarative_base()

class User(Base):
  __tablename__ = "user_account"

  #atributos
  id = Column(Integer, primary_key=True)
  name = Column(String)
  fullname = Column(String)

  address = relationship(
    "Address", back_populates="user", cascade="all, delete-orphan"
  )

  def __repr__(self):
    return f"User (id={self.id}, name={self.name}, fullname={self.fullname})"


class Address(Base):
  __tablename__ = "address"

  id = Column(Integer, primary_key=True)
  email_address = Column(String(30), nullable=False) #O usuario é obrigado a adicionar um email
  user_id = Column(Integer, ForeignKey("user_account.id"), nullable=False)

  user = relationship("User", back_populates="address")

  def __repr__(self):
    return f"Address (id={self.id}, email_address={self.email_address})"

###
print(User.__tablename__)
print(Address.__tablename__)


#Conexão com o banco de dados
engine = create_engine("sqlite://")

#Criando as classes como tabelas no banco de dados
Base.metadata.create_all(engine)



###
inspetor_engine = inspect(engine)

print(inspetor_engine.has_table("user_account"))
print(inspetor_engine.get_table_names())
print(inspetor_engine.default_schema_name)


#Criando uma Sessão para Persistir dados
with Session(engine) as session:
  Joao = User(
    name='joao',
    fullname='ezequiel',
    address=[Address(email_address='joaoezeki@gmail.com')]
  )

  Vitor = User(
    name='vitor',
    fullname='ezequiel',
    address=[Address(email_address='vitorezeki@gmail.com')]
  )

  Mateus = User(
    name='mateus',
    fullname='ezequiel',
    address=[Address(email_address='mateusezeki@gmail.com')]
  )

  #Enviando para o BD (Persistir de dados)
  session.add_all([Joao, Vitor, Mateus])
  session.commit()
