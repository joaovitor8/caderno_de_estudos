from sqlalchemy import create_engine, MetaData, Table, Column, Integer, String, ForeignKey

engine = create_engine('sqlite:///:memory')
metadata_obj = MetaData()

user = Table(
  'user',
  metadata_obj,
  Column('user_id', Integer, primary_key=True),
  Column('user_name', String(40), nullable=False),
  Column('email_address', String(60)),
  Column('nickname', String(50), nullable=False)
)

user_prefs = Table(
  'user_prefs',
  Column('pref_id', Integer, primary_key=True),
  Column('user_id', Integer, ForeignKey("user.user_id"), primary_key=False),
  Column('pref_name', String(40), nullable=False),
  Column('pref_value', String(100)),
)

for table in metadata_obj.sorted_tables:
  print(table)

